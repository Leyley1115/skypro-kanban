import styled from "styled-components";

const NotFoundWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #565eef;
  font-family: "Roboto", sans-serif;
`;

const NotFoundCode = styled.h1`
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const NotFoundText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #94a6be;
`;

const NotFoundPage = () => {
  return (
    <NotFoundWrapper>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundText>Страница не найдена</NotFoundText>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
