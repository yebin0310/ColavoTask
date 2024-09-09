import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  h2 {
    margin: 0;
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const ServiceList = styled.div`
  margin-bottom: 15px;
`;

export const ServiceItem = styled.div`
  margin-bottom: 10px;
  label {
    cursor: pointer;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DeleteButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  background: #2ecc71;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
`;
