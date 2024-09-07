import React, { useState } from "react";
import * as S from "./style";

interface ModalProps {
  items: {
    [key: string]: {
      name: string;
      price: number;
      count: number;
    };
  };
}

export const Modal: React.FC<ModalProps> = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleItemClick = (itemName: string) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(itemName)
        ? prevSelectedItems.filter((item) => item !== itemName)
        : [...prevSelectedItems, itemName]
    );
  };

  return (
    <S.Modal>
      <S.Title>시술 메뉴</S.Title>
      <S.ItemList>
        {Object.keys(items).map((key) => {
          const item = items[key];
          return (
            <S.Item key={key} onClick={() => handleItemClick(item.name)}>
              <div>
                <S.ItemName>{item.name}</S.ItemName>
                <S.ItemDetails>
                  {item.price.toLocaleString()}원, 1시간{" "}
                </S.ItemDetails>
              </div>
              {selectedItems.includes(item.name) && (
                <S.Checkmark>✔</S.Checkmark>
              )}
            </S.Item>
          );
        })}
      </S.ItemList>
      <S.CompleteButton>완료</S.CompleteButton>
    </S.Modal>
  );
};
