import {Card_1_1, Card_1_2, Card_1_3, Card_1_4, Card_1_5, Card_2_1, Card_3_1, Card_3_2, Card_3_3, Card_4_1, Card_5_1} from "../Card/Cards.jsx";

function Columns(){
    return(
        <>
        <div className="main__column column">
			<div className="column__title">
				<p>Без статуса</p>
			</div>
			<div className="cards">
				<Card_1_1 />
				<Card_1_2 />
				<Card_1_3 />
				<Card_1_4 />
				<Card_1_5 />
			</div>
		</div>						
		<div className="main__column">
			<div className="column__title">
				<p>Нужно сделать</p>
			</div>
			<div className="cards">
				<Card_2_1 />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>В работе</p>
			</div>
			<div className="cards">
				<Card_3_1 />
				<Card_3_2 />
				<Card_3_3 />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>Тестирование</p>
			</div>
			<div className="cards">
				<Card_4_1 />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>Готово</p>
			</div>
			<div className="cards">
				<Card_5_1 />			
			</div>
		</div>
        </>
    )
}

export default Columns;