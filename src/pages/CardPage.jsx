import { useMemo } from "react";
import { cardList } from "../components/data";
import { useParams } from "react-router-dom";

// из exit
import { PopExitContainer } from "../components/PopUser/PopUser.styled";
import { PopExitBlock } from "../components/PopUser/PopUser.styled";
import { PopExit } from "../components/PopUser/PopUser.styled";
import { PopExitButtonNo } from "../components/PopUser/PopUser.styled";

export const CardPage = () => {
  const { id } = useParams();
  const card = useMemo(
    () => cardList.find((c) => c.id === Number(id)) || { topic: "" },
    [id]
  );

  return (
    <PopExit>
    <PopExitContainer>
      <PopExitBlock>
      <h2>Карточка {card.topic}</h2>
      <p>ID: {id}</p>
      <PopExitButtonNo to="/">Закрыть</PopExitButtonNo>
      </PopExitBlock>
    </PopExitContainer>
    </PopExit>
  );
};
