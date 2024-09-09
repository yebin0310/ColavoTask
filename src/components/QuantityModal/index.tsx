import React from "react";
import * as S from "./style";

interface QuantityModalProps {
  itemName: string;
  onSelect: (quantity: number) => void;
  onClose: () => void;
}

export const QuantityModal: React.FC<QuantityModalProps> = ({
  itemName,
  onSelect,
  onClose,
}) => {
  return (
    <S.ModalBackdrop>
      <S.Modal>
        <S.ModalHeader>
          <p>{itemName} 수량 선택</p>
          <button onClick={onClose}>X</button>
        </S.ModalHeader>

        <S.QuantityList>
          {[...Array(10)].map((_, i) => (
            <S.QuantityItem key={i + 1} onClick={() => onSelect(i + 1)}>
              {i + 1}
            </S.QuantityItem>
          ))}
        </S.QuantityList>
      </S.Modal>
    </S.ModalBackdrop>
  );
};
