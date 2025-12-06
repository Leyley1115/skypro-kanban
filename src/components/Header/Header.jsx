import {useState} from 'react';
import { ButtonHeaderNew, Checkbox, HeaderBlock, HeaderLogo, HeaderLogoDark, HeaderNav, HeaderPopUserSet, Hover2, Hover3, SetMail, SetName, SetTheme, SHeader } from './Header.style';
import { Container } from '../Main/Main.style';

function Header(){
	const [state, setState] = useState('false');

	function openState(){
		setState(!state);
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
						<ButtonHeaderNew><a href="#popNewCard">Создать новую задачу</a></ButtonHeaderNew>
						<Hover2 href="#" onClick = {openState}>Ivan Ivanov</Hover2>
						<HeaderPopUserSet $state = {state}>
							{/* <!-- <a href="">x</a> --> */}
							<SetName>Ivan Ivanov</SetName>
							<SetMail>ivan.ivanov@gmail.com</SetMail>
							<SetTheme>
								<p>Темная тема</p>
								<Checkbox type="checkbox" name="checkbox"></Checkbox>
							</SetTheme>
							<Hover3><a href="#">Выйти</a></Hover3>
						</HeaderPopUserSet>
					</HeaderNav>					
				</HeaderBlock>
			</Container>			
		</SHeader>
    )
}

export default Header;