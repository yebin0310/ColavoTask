import React from "react";
import * as S from "./style";

interface MenuType {
  item: string;
  isActive?: boolean;
  onClick?: () => void;
}

const MenuButton: React.FC<MenuType> = ({
  item,
  isActive = false,
  onClick,
}) => {
  return (
    <S.MenuButton active={isActive} onClick={onClick}>
      {item}
    </S.MenuButton>
  );
};

export default MenuButton;
