import { useState, useContext } from "react";
import { MyCalendar } from "../Calendar/MyCalendar.jsx";
import { PopExitButtonNo } from "../PopUser/PopUser.styled.js";
import { useEffect } from "react";

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
const { cards, deleteCard, updateCard, setPopBrowseOpen, setBrowseCardId } = useContext(CardsContext);
const card = cards.find((c) => c._id === id); 
const statusList = [ 
  "Без статуса", 
  "Нужно сделать", 
  "В работе", 
  "Тестирование", 
  "Готово", ]; 
const [isEditingNow, setIsEditingNow] = useState(true); 
const [editedStatus, setEditedStatus] = useState(card?.status || ""); 
const [editedDescription, setEditedDescription] = useState(card?.description || "");
const [editedDate, setEditedDate] = useState(
  card?.date ? new Date(card.date) : new Date()
);

useEffect(() => { 
  if (card) { 
    setEditedStatus(card.status); 
    setEditedDescription(card.description); 
  } 
}, [card]);


if (!card) return null; 
const handleSave = async () => { 
  await updateCard({ 
    id, 
    card: { 
      ...card, 
      date: editedDate.toISOString(),
      status: 
        editedStatus, 
        description: editedDescription, 
      }, 
}); 

  setIsEditingNow(true); };
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

            <MyCalendar
              value={editedDate}
              onChange={(value) => setEditedDate(new Date(value))}
            />


            </PopBrowseWrap>

            {isEditingNow ? (
              <PopBrowseBtnBrowse>
                <BtnGroup>
                  <button onClick={() => setIsEditingNow(false)}>
                    Редактировать задачу
                  </button>

                  <button onClick={() => deleteCard(id)} to='/'>
                    Удалить
                  </button>
                </BtnGroup>

                <PopExitButtonNo onClick={() => {
                  setPopBrowseOpen(false);
                  setBrowseCardId(null);
                }} to='/'>
                  Закрыть
                </PopExitButtonNo>
              </PopBrowseBtnBrowse>
            ) : (
              <PopBrowseBtnBrowse>
                <BtnGroup>
                  <PopExitButtonNo onClick={handleSave}>Сохранить</PopExitButtonNo>

                  <button onClick={() => setIsEditingNow(true)}>
                    Отменить
                  </button>

                  <button onClick={() => deleteCard(id)}>
                    Удалить задачу
                  </button>
                </BtnGroup>

                <PopExitButtonNo onClick={() => {setPopBrowseOpen(false); setBrowseCardId(null);}} to ='/'>
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
