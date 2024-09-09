import React, { useEffect, useState } from "react";
import { Button } from "./components";
import * as S from "./style";
import useStore from "./stores/StoreContainer";
import { Modal } from "./components/Modal";
import { DiscountModal } from "./components/DiscountModal";
import { QuantityModal } from "./components/QuantityModal";
import { DiscountEditModal } from "./components/DiscountEditModal";

function App() {
  const {
    setProcedure,
    procedure,
    selectedItems,
    selectedDiscounts,
    totalPrice,
    setSelectedItems,
    setSelectedDiscounts,
    updateDiscountServices,
  } = useStore();
  const [data, setData] = useState<any>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [editingDiscount, setEditingDiscount] = useState<any | null>(null);

  useEffect(() => {
    fetch("/menuData.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  const handleButtonClick = (item: string) => {
    setProcedure(item);
  };

  const openQuantityModal = (itemName: string) => {
    setActiveItem(itemName);
  };

  const closeQuantityModal = () => {
    setActiveItem(null);
  };

  const handleQuantitySelect = (itemName: string, quantity: number) => {
    setSelectedItems(
      selectedItems.map((item) =>
        item.name === itemName ? { ...item, quantity } : item
      )
    );
    closeQuantityModal();
  };

  const openEditDiscountModal = (discount: any) => {
    setEditingDiscount(discount);
  };

  const closeEditDiscountModal = () => {
    setEditingDiscount(null);
  };

  const handleDiscountUpdate = (discountName: string, services: string[]) => {
    updateDiscountServices(discountName, services);
    closeEditDiscountModal();
  };

  const handleDeleteDiscount = (discountName: string) => {
    setSelectedDiscounts((prevDiscounts: any[]) =>
      prevDiscounts.filter((discount) => discount.name !== discountName)
    );
    closeEditDiscountModal();
  };

  const groupDiscounts = () => {
    return selectedDiscounts.map((discount) => {
      const discountedServices = selectedItems
        .filter(
          (item) => item.quantity > 0 && discount.services?.includes(item.name)
        )
        .map((item) => ({
          name: item.name,
          discountAmount: item.price * discount.rate * item.quantity,
        }));

      const totalDiscountAmount = discountedServices.reduce(
        (sum, service) => sum + service.discountAmount,
        0
      );

      return {
        discountName: discount.name,
        rate: discount.rate,
        services: discountedServices,
        totalDiscountAmount,
      };
    });
  };

  const discountGroups = groupDiscounts();

  return (
    <div className="App">
      <S.Layout>
        {procedure === "시술" && data ? <Modal items={data.items} /> : null}
        {procedure === "할인" ? (
          <DiscountModal discounts={data?.discounts} />
        ) : null}

        <S.Container>
          <S.Header>
            <S.Title>곽지우</S.Title>
            <S.Date>2019. 6. 14. 오후 5:30</S.Date>
          </S.Header>

          <S.InfoHead>
            <Button item="시술" onClick={() => handleButtonClick("시술")} />
            <Button
              item="할인"
              isActive={true}
              onClick={() => handleButtonClick("할인")}
            />
          </S.InfoHead>

          <S.MenuList>
            <S.SelectedItems>
              {selectedItems.map((item, index) => (
                <div key={index}>
                  <S.SelectedItemsLayout>
                    <S.SelectedItem>
                      <p>{item.name}</p>
                      <p>{item.price.toLocaleString()}원</p>
                    </S.SelectedItem>

                    <S.QuantityToggle
                      onClick={() => openQuantityModal(item.name)}
                    >
                      <span>{item.quantity} ▼</span>
                    </S.QuantityToggle>
                  </S.SelectedItemsLayout>
                </div>
              ))}
            </S.SelectedItems>

            <S.DiscountSection>
              {discountGroups.map((group, index) => (
                <div key={index}>
                  <p>
                    {group.discountName}{" "}
                    <button onClick={() => openEditDiscountModal(group)}>
                      수정
                    </button>
                  </p>
                  <p>
                    {group.services.map((service) => service.name).join(", ")} -{" "}
                    {group.totalDiscountAmount.toLocaleString()}원 (
                    {group.rate * 100}%)
                  </p>
                </div>
              ))}
            </S.DiscountSection>
          </S.MenuList>

          <S.Total>
            <S.TotalText>합계</S.TotalText>
            <S.TotalPrice>{totalPrice.toLocaleString()}원</S.TotalPrice>
          </S.Total>

          <S.NextButton>다음</S.NextButton>

          {activeItem && (
            <QuantityModal
              itemName={activeItem}
              onSelect={(quantity) =>
                handleQuantitySelect(activeItem, quantity)
              }
              onClose={closeQuantityModal}
            />
          )}

          {editingDiscount && (
            <DiscountEditModal
              discountName={editingDiscount.discountName}
              discountRate={editingDiscount.rate}
              services={selectedItems.map((item) => item.name)} // Pass the service names
              selectedServices={editingDiscount.services || []} // Pass the currently selected services
              onClose={closeEditDiscountModal}
              onConfirm={(selectedServices) =>
                handleDiscountUpdate(
                  editingDiscount.discountName,
                  selectedServices
                )
              }
              onDelete={() =>
                handleDeleteDiscount(editingDiscount.discountName)
              }
            />
          )}
        </S.Container>
      </S.Layout>
    </div>
  );
}

export default App;
