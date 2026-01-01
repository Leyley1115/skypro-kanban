import { useState, useContext } from "react";
import Calendar from "../Calendar/Calendar.jsx";
import { CardsContext } from "../../context/TaskContext.js";

import { 
  PopNewCardStyle,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
} from "../PopBrowse/PopBrowse.styled.js";

export function PopNewCard() {
  const { addNewCard } = useContext(CardsContext);

  // локальные состояния
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [date, setDate] = useState(new Date().toISOString());

  const handleCreate = () => {
    if (!title.trim()) return;

    addNewCard({
      card: {
        title,
        description,
        topic,
        status: "Без статуса",
        date,
      },
    });

    // можно закрыть модалку, если нужно
  };

  return (
    <PopNewCardStyle id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>

            <PopNewCardClose>&#10006;</PopNewCardClose>

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

              <Calendar onChange={(d) => setDate(d)} />
            </PopNewCardWrap>

            {/* Категории */}
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


// import Calendar from "../Calendar/Calendar.jsx";
// import { 
//   PopNewCardStyle,
//   PopNewCardContainer,
//   PopNewCardBlock,
//   PopNewCardContent,
//   PopNewCardTitle,
//   PopNewCardClose,
//   PopNewCardWrap,

//  } from "../PopBrowse/PopBrowse.styled.js";
// export function PopNewCard() {
//   return (
//     <PopNewCardStyle id="popNewCard">
//       <PopNewCardContainer>
//         <PopNewCardBlock>
//           <PopNewCardContent>
//             <PopNewCardTitle>Создание задачи</PopNewCardTitle>
//             <PopNewCardClose>
//               &#10006;
//             </PopNewCardClose>
//             <PopNewCardWrap>
//               <form
//                 className="pop-new-card__form form-new"
//                 id="formNewCard"
//                 action="#"
//               >
//                 <div className="form-new__block">
//                   <label htmlFor="formTitle" className="subttl">
//                     Название задачи
//                   </label>
//                   <input
//                     className="form-new__input"
//                     type="text"
//                     name="name"
//                     id="formTitle"
//                     placeholder="Введите название задачи..."
//                     autoFocus
//                   ></input>
//                 </div>
//                 <div className="form-new__block">
//                   <label htmlFor="textArea" className="subttl">
//                     Описание задачи
//                   </label>
//                   <textarea
//                     className="form-new__area"
//                     name="text"
//                     id="textArea"
//                     placeholder="Введите описание задачи..."
//                   ></textarea>
//                 </div>
//               </form>
//               <Calendar />
//             </PopNewCardWrap>
//             <div className="pop-new-card__categories categories">
//               <p className="categories__p subttl">Категория</p>
//               <div className="categories__themes">
//                 <div className="categories__theme _orange _active-category">
//                   <p className="_orange">Web Design</p>
//                 </div>
//                 <div className="categories__theme _green">
//                   <p className="_green">Research</p>
//                 </div>
//                 <div className="categories__theme _purple">
//                   <p className="_purple">Copywriting</p>
//                 </div>
//               </div>
//             </div>
//             <button className="form-new__create _hover01" id="btnCreate">
//               Создать задачу
//             </button>
//           </PopNewCardContent>
//         </PopNewCardBlock>
//       </PopNewCardContainer>
//     </ PopNewCardStyle>
//   );
// }
