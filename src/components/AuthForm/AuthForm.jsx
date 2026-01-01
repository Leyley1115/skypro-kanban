import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
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
import { signIn, signUp } from "../../services/auth.js";
import { AuthContext } from "../../context/AuthContext.js";

export function AuthForm({ isSignUp, setIsAuth }) {
  const navigate = useNavigate();
  const {updateUserInfo}=useContext(AuthContext);

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // состояние ошибок
  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  // текст ошибки
  const [error, setError] = useState("");

  // валидация
  const validateForm = () => {
  const newErrors = { name: false, login: false, password: false };

  //вход
  if (!isSignUp) {
    let isValid = true;

    if (!formData.login.trim()) {
      newErrors.login = true;
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setError("Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа.");
    }

    return isValid;
  }

  //регистрация
  let isValid = true;

  if (!formData.name.trim()) {
    newErrors.name = true;
    isValid = false;
  }

  if (!formData.login.trim()) {
    newErrors.login = true;
    isValid = false;
  }

  if (!formData.password.trim()) {
    newErrors.password = true;
    isValid = false;
  }

  setErrors(newErrors);

  if (!isValid) {
    setError("Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.");
  }

  return isValid;
};


  // обновление полей
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        updateUserInfo(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <ContainerSignin>
          <Modal>
            {!isSignUp ? (
              <ModalBlock>
                <ModalTitle>
                  <h2>Вход</h2>
                </ModalTitle>
                <ModalFormLogin> 
                  <ModalInput 
                    type="text" 
                    name="login" 
                    placeholder="Логин" 
                    value={formData.login} 
                    onChange={handleChange} 
                    style={{ border: errors.login ? "1px solid red" : "1px solid #ccc", }} 
                  /> 
                  <ModalInput 
                    type="password" 
                    name="password" 
                    placeholder="Пароль" 
                    value={formData.password} 
                    onChange={handleChange} 
                    style={{ border: errors.password 
                      ? 
                      "1px solid red" 
                      : 
                      "1px solid #ccc", }} 
                    /> 
                  {error && <p style={{ color: "red" }}>{error}</p>} 
                  <ModalBtnEnter onClick={handleSubmit}>Войти</ModalBtnEnter> </ModalFormLogin>

                <ModalFormGroup>
                  <p>
                    Нужно зарегистрироваться?
                    <ModalLink to="/register">Регистрируйтесь здесь</ModalLink>
                  </p>
                </ModalFormGroup>
              </ModalBlock>
            ) : (
              <ModalBlock>
                <ModalTitle>
                  <h2>Регистрация</h2>
                </ModalTitle>

                <ModalFormLogin>
                  <ModalInput
                    type="text"
                    name="name"
                    placeholder="Имя"
                    error={errors.name}
                    value={formData.name}
                    onChange={handleChange}
                    style={{ border: errors.login ? "1px solid red" : "1px solid #ccc", }}
                  />

                  <ModalInput
                    type="email"
                    name="login"
                    placeholder="Эл. почта"
                    error={errors.login}
                    value={formData.login}
                    onChange={handleChange}
                    style={{ border: errors.login ? "1px solid red" : "1px solid #ccc", }}
                  />

                  <ModalInput
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    error={errors.password}
                    value={formData.password}
                    onChange={handleChange}
                    style={{ border: errors.login ? "1px solid red" : "1px solid #ccc", }}
                  />

                  {error && <p style={{ color: "red" }}>{error}</p>}

                  <ModalBtnEnter onClick={handleSubmit}>
                    Зарегистрироваться
                  </ModalBtnEnter>
                </ModalFormLogin>

                <ModalFormGroup>
                  <p>
                    Уже есть аккаунт?
                    <ModalLink to="/login"> Войдите здесь</ModalLink>
                  </p>
                </ModalFormGroup>
              </ModalBlock>
            )}
          </Modal>
        </ContainerSignin>
      </Wrapper>
    </>
  );
}
