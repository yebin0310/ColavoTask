import React, { useEffect, useState } from "react";
import { Button } from "./components";
import * as S from "./style";
import useStore from "./stores/StoreContainer";
import { Modal } from "./components/Modal";

function App() {
  const { setProcedure, procedure } = useStore();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    // Fetch the JSON file from the public folder
    fetch("/menuData.json")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error fetching menu data:", error));
  }, []);

  const handleButtonClick = (item: string) => {
    setProcedure(item);
  };

  return (
    <div className="App">
      <S.Layout>
        {procedure === "시술" && data ? <Modal items={data.items} /> : null}
        <S.Container>
          <S.Header>
            <S.CloseButton>X</S.CloseButton>
            <S.Title>곽지우</S.Title>
            <S.Date>2019. 6. 14. 오후 5:30</S.Date>
          </S.Header>
          <S.InfoHead>
            <Button item="시술" onClick={() => handleButtonClick("시술")} />
            <Button
              item="할인"
              isActive={true}
              onClick={() => handleButtonClick("할인")}
            />
          </S.InfoHead>
          <S.Total>
            <S.TotalText>합계</S.TotalText>
            <S.TotalPrice>0원</S.TotalPrice>
          </S.Total>
          <S.NextButton>다음</S.NextButton>
        </S.Container>
      </S.Layout>
    </div>
  );
}

export default App;
