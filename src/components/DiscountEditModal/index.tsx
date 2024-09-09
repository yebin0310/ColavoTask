import React, { useState } from "react";
import * as S from "./style";

interface DiscountEditModalProps {
  discountName: string;
  discountRate: number;
  services: string[];
  selectedServices: string[];
  onClose: () => void;
  onConfirm: (selectedServices: string[]) => void;
  onDelete: () => void;
}

export const DiscountEditModal: React.FC<DiscountEditModalProps> = ({
  discountName,
  discountRate,
  services,
  selectedServices,
  onClose,
  onConfirm,
  onDelete,
}) => {
  const [currentSelection, setCurrentSelection] =
    useState<string[]>(selectedServices);

  const handleServiceToggle = (service: string) => {
    setCurrentSelection((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalHeader>
          <h2>{discountName} 수정</h2>
          <S.CloseButton onClick={onClose}>✕</S.CloseButton>
        </S.ModalHeader>

        <S.ServiceList>
          {services.map((service) => (
            <S.ServiceItem key={service}>
              <label>
                <input
                  type="checkbox"
                  checked={currentSelection.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                {service}
              </label>
            </S.ServiceItem>
          ))}
        </S.ServiceList>

        <S.ModalFooter>
          <S.DeleteButton onClick={onDelete}>삭제</S.DeleteButton>
          <S.ConfirmButton onClick={() => onConfirm(currentSelection)}>
            확인
          </S.ConfirmButton>
        </S.ModalFooter>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};
