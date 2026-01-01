import Calendar from "../Calendar/Calendar.jsx";
import { useState } from "react";
import { PopExitButtonNo } from "../PopUser/PopUser.styled.js";
import { 
  PopNewCardStyle, 
  PopNewCardContainer, 
  PopNewCardBlock, 
  PopNewCardContent, 
  PopNewCardTitle, 
  PopNewCardTopBlock,
  CategoryTheme,
  Color,
  Status,
  StatusThemes,
  StatusTheme,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewInput,
  PopBrowseBtnBrowse,
  BtnGroup,
} from "./PopBrowse.styled";
import { useContext } from "react";
import { CardsContext } from "../../context/TaskContext.js";


export function PopBrowse({isEditing, id}) {
  const statusList = [
  'Без статуса',
  'Нужно сделать',
  'В работе',
  'Тестирование',
  'Готово'
  ];
  const { cards } = useContext(CardsContext);
  const card = cards.find(c => c._id === id);
  if (!card) return null;
  const { updateCard } = useContext(CardsContext); 
  const [isEditingNow, setIsEditingNow] = useState(isEditing);
  const [editedStatus, setEditedStatus] = useState(card.status); 
  const [editedTitle, setEditedTitle] = useState(card.title); 
  const [editedDescription, setEditedDescription] = useState(card.description);
  const handleSave = () => { 
    updateCard({ 
      id, 
      card: { 
        ...card, 
        status: editedStatus, 
        title: editedTitle, 
        description: editedDescription, 
      }, 
    }); 
    setIsEditingNow(true); 
  };

  return (
    <PopNewCardStyle $isEditing={isEditing}>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTopBlock>
              <PopNewCardTitle>{card.title}</PopNewCardTitle>
              <CategoryTheme $topic={card.topic}>
                <Color $topic={card.topic}>{card.topic}</Color>
              </CategoryTheme>
            </PopNewCardTopBlock>
            <Status>
              <PopNewCardTitle>{card.status}</PopNewCardTitle>

              <StatusThemes>
                {isEditingNow ? (
                  <StatusTheme>
                    <p>{editedStatus}</p>
                  </StatusTheme>
                  ) 
                  : 
                  (
                  statusList.map(status => (
                   <StatusTheme
                      key={status}
                      onClick={() => setEditedStatus(status)}
                      $active={status === editedStatus}
                      $isEditingNow={!isEditingNow}
                    >
                      <p>{status}</p>
                    </StatusTheme>

                  ))
                )}
            </StatusThemes>

            </Status>
            <PopNewCardWrap>
              <PopNewCardForm
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <FormNewInput
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={isEditingNow}
                    value={editedDescription}
                    onChange={e => setEditedDescription(e.target.value)}
                    placeholder="Введите описание задачи..."
                  />
                </div>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>
            {/* для создания задач */}
            {/* <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div> */}
            {isEditingNow ?
            <PopBrowseBtnBrowse>
              <BtnGroup>
                <button className="btn-browse__edit _btn-bor _hover03">
                  <p onClick={() => setIsEditingNow(!isEditingNow)}>Редактировать задачу</p>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </BtnGroup>
              <PopExitButtonNo to="/">Закрыть</PopExitButtonNo>
            </PopBrowseBtnBrowse>
            :  <PopBrowseBtnBrowse>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleSave}
                >
                  Сохранить
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
               <PopExitButtonNo to="/">Закрыть</PopExitButtonNo>
            </PopBrowseBtnBrowse>
          }
           </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
     </PopNewCardStyle>
  );
}
