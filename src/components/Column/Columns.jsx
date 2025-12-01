import { Card } from "../Card/Card";
import { cardList } from "../data";
import { Loader } from "../Loader/Loader";
import { CardLoader } from "../CardLoader/CardLoader";

function Columns({loading}) {
  const statusList = cardList.filter((item, index, array) => {
    return index === array.findIndex(obj => obj.status === item.status);
  }).map(item => item.status);

  return (
    <div className="main" style = {{display: "flex"}}>
      {statusList.map(status => (
        <div key={status} className="main__column column">
        {loading ?
        <Loader width={120} bottom={20}/>
        :<div className="column__title">
            <p>{status}</p>
          </div>
        }
        <div className="cards">
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
                />
              )}
            </div>
        </div>
      ))}
    </div>
  );
}

export default Columns;
