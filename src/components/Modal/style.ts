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
  margin-bottom: 20px;
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
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #f0f0f0;
  }
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
  color: #6200ee; /* Use a purple color similar to the image */
  align-self: flex-start;
`;

export const CompleteButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6200ee;
  color: white;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;
