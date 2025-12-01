import Columns from "../Column/Columns.jsx";

function Main({loading}){
    return (
        <main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<Columns loading={loading}/>
					</div>
				
				</div>
			</div>
		</main>
    )
};

export default Main;