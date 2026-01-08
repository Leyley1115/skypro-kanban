import {useState} from 'react';
import { ButtonHeaderNew, Checkbox, HeaderBlock, HeaderLogo, HeaderLogoDark, HeaderNav, HeaderPopUserSet, Hover2, Hover3, SetMail, SetName, SetTheme, SHeader } from './Header.styled.js';
import { Container } from '../Main/Main.styled.js';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext.js';
import { CardsContext } from '../../context/TaskContext.js';


function Header(){
	const [state, setState] = useState(false);
	const {setPopNewCard} = useContext(CardsContext);
	const {user} = useContext(AuthContext);

	function openState(){
		setState(prev => !prev);
	}

	
    return (
        <SHeader>
			<Container>
				<HeaderBlock>
					<HeaderLogo>
						<a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a>
					</HeaderLogo>
					<HeaderLogoDark>
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
					</HeaderLogoDark>
					<HeaderNav>
						<ButtonHeaderNew onClick={() => setPopNewCard(true)}>Создать новую задачу</ButtonHeaderNew>
						<Hover2 href="#" onClick = {openState}>{user.name}</Hover2>
						<HeaderPopUserSet $state = {state}>
							<SetName>{user.name}</SetName>
							{/* <SetMail>ivan.ivanov@gmail.com</SetMail> */}
							<SetTheme>
								<p>Темная тема</p>
								<Checkbox type="checkbox" name="checkbox"></Checkbox>
							</SetTheme>
							<Hover3 to='/exit'>Выйти</Hover3>
						</HeaderPopUserSet>
					</HeaderNav>		
				</HeaderBlock>
			</Container>			
		</SHeader>
    )
}

export default Header;