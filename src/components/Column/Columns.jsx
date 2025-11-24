import {Card} from "../Card/Cards.jsx";

function Columns(){
    return(
        <>
        <div className="main__column column">
			<div className="column__title">
				<p>Без статуса</p>
			</div>
			<div className="cards">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>						
		<div className="main__column">
			<div className="column__title">
				<p>Нужно сделать</p>
			</div>
			<div className="cards">
				<Card />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>В работе</p>
			</div>
			<div className="cards">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>Тестирование</p>
			</div>
			<div className="cards">
				<Card />
			</div>
		</div>
		<div className="main__column">
			<div className="column__title">
				<p>Готово</p>
			</div>
			<div className="cards">
				<Card />			
			</div>
		</div>
        </>
    )
}

export default Columns;