import { PopExit, PopExitBlock, PopExitButtonNo, PopExitButtonYes, PopExitContainer, PopExitForm, PopExitFormGroup, PopExitTitle } from "./PopUser.styled.js";

export function PopUser({setIsAuth}){

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
								<PopExitButtonYes to="/" onClick={() => {setIsAuth(false)}}>Да, выйти</PopExitButtonYes>
								<PopExitButtonNo to="/">Нет, остаться</PopExitButtonNo>
							</PopExitFormGroup>
						</PopExitForm>
					</PopExitBlock>
				</PopExitContainer>
		</PopExit>
        </>
    )
}