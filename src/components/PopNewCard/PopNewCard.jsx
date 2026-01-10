import { useState, useContext } from "react";
import { MyCalendar } from "../Calendar/MyCalendar.jsx";
import { CardsContext } from "../../context/TaskContext.js";
import { AuthContext } from "../../context/AuthContext.js";

import {
  PopNewCardStyle,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
} from "../PopNewCard/PopNewCard.styled.js";

export function PopNewCard() {
  const [newDate, setNewDate] = useState(new Date());
  const { error, addNewCard, setPopNewCard } = useContext(CardsContext);
  const { user } = useContext(AuthContext);
  const token = user.token;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [localError, setLocalError] = useState("");

  const handleCreate = async () => {
    if (!title.trim()) {
      setLocalError("Введите название задачи");
      return;
    }

    if (!description.trim()) {
      setLocalError("Введите описание задачи");
      return;
    }

    setLocalError("");

    await addNewCard({
      token,
      card: {
        title,
        description,
        topic,
        status: "Без статуса",
        date: newDate.toISOString(),
      },
    });

    setPopNewCard(false);
  };

  return (
    <PopNewCardStyle>
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>

            <PopNewCardClose onClick={() => setPopNewCard(false)}>
              &#10006;
            </PopNewCardClose>

            <PopNewCardWrap>
              <form className="pop-new-card__form form-new" id="formNewCard">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                  />
                </div>

                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </form>

              <MyCalendar value={newDate} onChange={setNewDate} />
            </PopNewCardWrap>

            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>

              <div className="categories__themes">
                <div
                  className={`categories__theme _orange ${
                    topic === "Web Design" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Web Design")}
                >
                  <p className="_orange">Web Design</p>
                </div>

                <div
                  className={`categories__theme _green ${
                    topic === "Research" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Research")}
                >
                  <p className="_green">Research</p>
                </div>

                <div
                  className={`categories__theme _purple ${
                    topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  onClick={() => setTopic("Copywriting")}
                >
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>

            {localError && (
              <p style={{ color: "red", marginTop: "10px" }}>{localError}</p>
            )}

            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>{error}</p>
            )}

            <button
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleCreate}
            >
              Создать задачу
            </button>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardStyle>
  );
}
