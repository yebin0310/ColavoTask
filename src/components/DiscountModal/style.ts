import styled from "@emotion/styled";

export const Modal = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const ItemList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  cursor: pointer;
  border-bottom: 1px solid #f1f1f1;

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemDetails = styled.div`
  font-size: 14px;
  color: #888;
  margin-top: 5px;
`;

export const Checkmark = styled.span`
  font-size: 18px;
  color: #6200ee;
`;

export const CompleteButton = styled.button`
  width: calc(100% - 40px);
  padding: 15px;

  background-color: #6200ee;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;
