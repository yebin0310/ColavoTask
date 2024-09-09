import styled from "@emotion/styled";

// 모달 배경
export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

// 모달 본체
export const Modal = styled.div`
  background-color: white;
  width: 300px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// 모달 헤더
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  p {
    font-size: 18px;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
`;

// 수량 리스트
export const QuantityList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

// 수량 아이템
export const QuantityItem = styled.div`
  background-color: #f1f3f5;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }
`;
