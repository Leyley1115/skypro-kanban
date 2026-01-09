import { Card } from "../Card/Card";
import { Loader } from "../Loader/Loader";
import { CardLoader } from "../CardLoader/CardLoader";
import { MainColumn, ColumnTitle, Main } from "./Columns.styled.js";

function Columns({loading, cardList}) {
  const statusList=['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово']

  return (
  <>
  <div style={{ display: "flex", flexDirection: "column" }}>
    
    <Main style={{ display: "flex" }}>
      {statusList.map(status => (
        <MainColumn key={status}>
          {loading ? (
            <Loader width={120} bottom={20} />
          ) : (
            <ColumnTitle>
              <p>{status}</p>
            </ColumnTitle>
          )}

          {loading ? (
            <>
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </>
          ) : (
            cardList
              .filter(card => card.status === status)
              .map(card => (
                <Card
                  key={card._id}
                  topic={card.topic}
                  title={card.title}
                  date={card.date}
                  id={card._id}
                />
              ))
          )}
        </MainColumn>
      ))}
    </Main>

    {!loading && cardList.length === 0 && (
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Здесь пока что нет задач
      </p>
    )}
    </div>
  </>

  );
}

export default Columns;
