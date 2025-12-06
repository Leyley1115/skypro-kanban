import Columns from "../Column/Columns.jsx";
import { Container, MainBlock, MainContent, MainM } from "./Main.style.js";

function Main({loading}){
    return (
        <MainM>
			<Container>
				<MainBlock>
					<MainContent>
						<Columns loading={loading}/>
					</MainContent>
				</MainBlock>
			</Container>
		</MainM>
    )
};

export default Main;