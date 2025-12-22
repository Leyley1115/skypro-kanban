import Columns from "../Column/Columns.jsx";
import { Container, MainBlock, MainContent, MainM } from "./Main.styled.js";

function Main({loading, error, cards}){
    return (
        <MainM>
			<Container>
				<MainBlock>
					<MainContent>
						<Columns loading={loading} error={error} cardList={cards}/>
					</MainContent>
				</MainBlock>
			</Container>
		</MainM>
    )
};

export default Main;