import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { CardLoader } from "../CardLoader/CardLoader";
import { MainColumn, ColumnTitle, Cards, Main } from "./Columns.styled.js";

function Columns({loading, cardList}) {
  const statusList=['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

  return (
    <Main style = {{display: "flex"}}>
      {statusList.map(status => (
        <MainColumn key={status}>
        {loading ?
        <Loader width={120} bottom={20}/>
        :<ColumnTitle>
            <p>{status}</p>
          </ColumnTitle>
        }
        <Cards>
            {cardList
              .filter(card => card.status === status)
              .map(card => 
                loading ?
                <CardLoader key = {card._id} />
                :
                <Card
                  key={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                  id={card._id}
                />
              )}
          </Cards>
        </MainColumn>
      ))}
    </Main>
  );
}

export default Columns;
