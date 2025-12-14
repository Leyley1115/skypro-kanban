import { Card } from "../Card/Card";
import { cardList } from "../data";
import { Loader } from "../Loader/Loader";
import { CardLoader } from "../CardLoader/CardLoader";
import { MainColumn, ColumnTitle, Cards, Main } from "./Columns.style";

function Columns({loading}) {
  const statusList = cardList.filter((item, index, array) => {
    return index === array.findIndex(obj => obj.status === item.status);
  }).map(item => item.status);

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
                <CardLoader key = {card.id} />
                :
                <Card
                  key={card.id}
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                  id={card.id}
                />
              )}
          </Cards>
        </MainColumn>
      ))}
    </Main>
  );
}

export default Columns;
