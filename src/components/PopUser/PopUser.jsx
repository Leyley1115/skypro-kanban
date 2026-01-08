import { PopExit, PopExitBlock, PopExitButtonNo, PopExitButtonYes, PopExitContainer, PopExitForm, PopExitFormGroup, PopExitTitle } from "./PopUser.styled.js";
import { useContext } from "react"; 
import { AuthContext } from "../../context/AuthContext";

export function PopUser(){
	const { logout } = useContext(AuthContext);

    return(
        <>
        <PopExit>
				<PopExitContainer>
					<PopExitBlock>
						<PopExitTitle>
							<h2>Выйти из аккаунта?</h2>
						</PopExitTitle>
						<PopExitForm action="#">
							<PopExitFormGroup>
								<PopExitButtonYes to="/" onClick={logout}>Да, выйти</PopExitButtonYes>
								<PopExitButtonNo to="/">Нет, остаться</PopExitButtonNo>
							</PopExitFormGroup>
						</PopExitForm>
					</PopExitBlock>
				</PopExitContainer>
		</PopExit>
        </>
    )
}