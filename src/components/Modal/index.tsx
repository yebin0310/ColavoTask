import React, { useState } from "react";
import useStore from "../../stores/StoreContainer";
import * as S from "./style";

interface ModalProps {
  items: {
    [key: string]: {
      name: string;
      price: number;
      time: string;
    };
  };
}

export const Modal: React.FC<ModalProps> = ({ items }) => {
  const { setProcedure, setSelectedItems } = useStore();
  const [selectedItems, setSelected] = useState<
    { name: string; price: number; quantity: number }[]
  >([]);

  const handleItemClick = (item: { name: string; price: number }) => {
    const existingItem = selectedItems.find((i) => i.name === item.name);

    if (existingItem) {
      // Update quantity if already selected
      setSelected(
        selectedItems.map((i) =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      // Add new item
      setSelected([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleComplete = () => {
    setSelectedItems(selectedItems);
    setProcedure(""); // Close the modal by resetting procedure
  };

  // Convert items object to array
  const itemsArray = Object.keys(items).map((key) => items[key]);

  return (
    <S.Modal>
      <S.Title>시술 메뉴</S.Title>
      <S.ItemList>
        {itemsArray.map((item) => (
          <S.Item
            key={item.name}
            onClick={() =>
              handleItemClick({ name: item.name, price: item.price })
            }
          >
            <S.ItemText>
              <S.ItemName>{item.name}</S.ItemName>
              <S.ItemDetails>
                {item.price.toLocaleString()}원, {item.time}
              </S.ItemDetails>
            </S.ItemText>
            {/* Display a checkmark for selected items */}
            {selectedItems.some((i) => i.name === item.name) && (
              <S.Checkmark>✔</S.Checkmark>
            )}
          </S.Item>
        ))}
      </S.ItemList>
      <S.CompleteButton onClick={handleComplete}>완료</S.CompleteButton>
    </S.Modal>
  );
};
