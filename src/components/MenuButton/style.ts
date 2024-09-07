import styled from "@emotion/styled";

export const MenuButton = styled.button<{ active: boolean }>`
  background-color: ${({ active }) => (active ? "#ffdde1" : "#eee")};
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  width: 49%;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
