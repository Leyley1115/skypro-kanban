import { useState, useContext } from "react";
import Calendar from "../Calendar/Calendar.jsx";
import { PopExitButtonNo } from "../PopUser/PopUser.styled.js";

import {
  PopBrowseStyle,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTitle,
  PopBrowseTopBlock,
  CategoryTheme,
  Color,
  Status,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  PopBrowseForm,
  FormNewInput,
  PopBrowseBtnBrowse,
  BtnGroup,
} from "./PopBrowse.styled";

import { CardsContext } from "../../context/TaskContext.js";

export function PopBrowse({ id }) {
  const {
    cards,
    deleteCard,
    updateCard,
    setPopBrowseOpen,
  } = useContext(CardsContext);

  const card = cards.find((c) => c._id === id);
  if (!card) return null;

  const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  const [isEditingNow, setIsEditingNow] = useState(true);
  const [editedStatus, setEditedStatus] = useState(card.status);
  const [editedDescription, setEditedDescription] = useState(card.description);

  const handleSave = async () => {
    await updateCard({
      id,
      card: {
        ...card,
        status: editedStatus,
        description: editedDescription,
      },
    });

    setIsEditingNow(true);
  };

  return (
    <PopBrowseStyle>
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>{card.title}</PopBrowseTitle>

              <CategoryTheme $topic={card.topic}>
                <Color $topic={card.topic}>{card.topic}</Color>
              </CategoryTheme>
            </PopBrowseTopBlock>

            <Status>
              <PopBrowseTitle>{editedStatus}</PopBrowseTitle>

              <StatusThemes>
                {isEditingNow ? (
                  <StatusTheme>
                    <p>{editedStatus}</p>
                  </StatusTheme>
                ) : (
                  statusList.map((status) => (
                    <StatusTheme
                      key={status}
                      onClick={() => setEditedStatus(status)}
                      $active={status === editedStatus}
                    >
                      <p>{status}</p>
                    </StatusTheme>
                  ))
                )}
              </StatusThemes>
            </Status>

            <PopBrowseWrap>
              <PopBrowseForm>
                <label>Описание задачи</label>

                <FormNewInput
                  readOnly={isEditingNow}
                  value={editedDescription}
                  onChange={(e) => setEditedDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                />
              </PopBrowseForm>

              <Calendar />
            </PopBrowseWrap>

            {isEditingNow ? (
              <PopBrowseBtnBrowse>
                <BtnGroup>
                  <button onClick={() => setIsEditingNow(false)}>
                    Редактировать
                  </button>

                  <button onClick={() => deleteCard(id)}>
                    Удалить
                  </button>
                </BtnGroup>

                <PopExitButtonNo onClick={() => setPopBrowseOpen(false)}>
                  Закрыть
                </PopExitButtonNo>
              </PopBrowseBtnBrowse>
            ) : (
              <PopBrowseBtnBrowse>
                <BtnGroup>
                  <button onClick={handleSave}>Сохранить</button>

                  <button onClick={() => setIsEditingNow(true)}>
                    Отменить
                  </button>

                  <button onClick={() => deleteCard(id)}>
                    Удалить
                  </button>
                </BtnGroup>

                <PopExitButtonNo onClick={() => setPopBrowseOpen(false)}>
                  Закрыть
                </PopExitButtonNo>
              </PopBrowseBtnBrowse>
            )}
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseStyle>
  );
}
