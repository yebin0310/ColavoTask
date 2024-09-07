import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const Container = styled.div`
  width: 500px;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const CloseButton = styled.button`
  align-self: flex-start;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin: 0;
`;

export const Date = styled.p`
  color: #888888;
  font-size: 14px;
  margin-top: 4px;
`;

export const InfoHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: auto;
  padding-bottom: 20px;
`;

export const TotalText = styled.span`
  font-size: 16px;
  color: #888;
`;

export const TotalPrice = styled.span`
  font-size: 16px;
`;

export const NextButton = styled.button`
  width: 100%;
  background-color: #d0a8f9;
  border: none;
  border-radius: 12px;
  padding: 15px 0;
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
