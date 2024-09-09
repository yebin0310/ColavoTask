import React, { useState } from "react";
import useStore from "../../stores/StoreContainer";
import * as S from "./style";

interface DiscountModalProps {
  discounts: {
    [key: string]: {
      name: string;
      rate: number;
    };
  };
}

export const DiscountModal: React.FC<DiscountModalProps> = ({ discounts }) => {
  const { setProcedure, setSelectedDiscounts } = useStore();
  const [selectedDiscounts, setSelected] = useState<
    { name: string; rate: number; quantity: number }[]
  >([]);

  const handleDiscountClick = (discount: { name: string; rate: number }) => {
    const existingDiscount = selectedDiscounts.find(
      (d) => d.name === discount.name
    );

    if (existingDiscount) {
      setSelected(
        selectedDiscounts.map((d) =>
          d.name === discount.name ? { ...d, quantity: d.quantity + 1 } : d
        )
      );
    } else {
      setSelected([...selectedDiscounts, { ...discount, quantity: 1 }]);
    }
  };

  const handleComplete = () => {
    setSelectedDiscounts(selectedDiscounts);
    setProcedure(""); // Close modal
  };

  const discountsArray = Object.keys(discounts).map((key) => discounts[key]);

  return (
    <S.Modal>
      <S.Title>할인 선택</S.Title>
      <S.ItemList>
        {discountsArray.map((discount) => (
          <S.Item
            key={discount.name}
            onClick={() =>
              handleDiscountClick({ name: discount.name, rate: discount.rate })
            }
          >
            <S.ItemText>
              <S.ItemName>{discount.name}</S.ItemName>
              <S.ItemDetails>할인율: {discount.rate * 100}%</S.ItemDetails>
            </S.ItemText>
            {selectedDiscounts.some((d) => d.name === discount.name) && (
              <S.Checkmark>✔</S.Checkmark>
            )}
          </S.Item>
        ))}
      </S.ItemList>
      <S.CompleteButton onClick={handleComplete}>완료</S.CompleteButton>
    </S.Modal>
  );
};
