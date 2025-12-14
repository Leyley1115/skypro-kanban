import { useNavigate } from "react-router-dom";
import {
  GlobalStyles,
  Wrapper,
  ContainerSignin,
  Modal,
  ModalBlock,
  ModalTitle,
  ModalFormLogin,
  ModalInput,
  ModalBtnEnter,
  ModalFormGroup,
  ModalLink
} from "./AuthForm.styled.js";

export function AuthForm({isSignUp, setIsAuth}) {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
   };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <ContainerSignin>
          <Modal>
            {!isSignUp ?
            <ModalBlock>
              <ModalTitle>
                <h2>Вход</h2>
              </ModalTitle>
              <ModalFormLogin>
                <ModalInput type="text" placeholder="Логин" />
                <ModalInput type="password" placeholder="Пароль" />
                <ModalBtnEnter onClick={handleLogin}>Войти</ModalBtnEnter>
              </ModalFormLogin>
              <ModalFormGroup>
                <p>Нужно зарегистрироваться?<ModalLink to="/register">Регистрируйтесь здесь</ModalLink></p>
              </ModalFormGroup>
            </ModalBlock>
          :
          <ModalBlock>
              <ModalTitle>
                <h2>Регистрация</h2>
              </ModalTitle>
              <ModalFormLogin>
                <ModalInput type="text" placeholder="Имя" />
                <ModalInput type="email" placeholder="Эл. почта" />
                <ModalInput type="password" placeholder="Пароль" />
                <ModalBtnEnter>Зарегистрироваться</ModalBtnEnter>
              </ModalFormLogin>
              <ModalFormGroup>
                <p>Уже есть аккаунт?<ModalLink to="/login"> Войдите здесь</ModalLink></p>
              </ModalFormGroup>
            </ModalBlock>
          }
            
          </Modal>
        </ContainerSignin>
      </Wrapper>
    </>
  );
}
