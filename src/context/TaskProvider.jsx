import { useContext, useState, useEffect } from "react";
import { fetchCards } from "../services/api";
import { AuthContext } from "./AuthContext";
import { CardsContext } from "./TaskContext";
import { editCard } from "../services/api";
import { postCard } from "../services/api";


export const CardsProvider = ({ children }) => {
   const [cards, setCards] = useState([]); //содержит карточки
   const [loading, setLoading] = useState(false); //состояние загрузки
   const [error, setError] = useState(""); //текст ошибки
   const { user } = useContext(AuthContext); //для получения токена


   useEffect(() => {
      const loadCards = async () => {
         try {
            const data = await fetchCards({token: user.token});
            if (data) setCards(data.tasks);
         } catch (error) {
            setError(error.message);
            console.error("Ошибка загрузки карточки", error);
         } finally {
            setLoading(false);
         }
      };
      loadCards();
   }, [user.token]);

   const addNewCard = async ({ cards }) => {
      try {
         const newCards = await postCard({ token: user?.token, card });
         setCards(newCards);
      } catch (error) {
         console.error("Ошибка добавления карточки", error);
      }
   };


   const updateCard = async ({ card, id }) => {
      try {
         const newCards = await editCard({ token: user?.token, id, card });
         setCards(newCards);
      } catch (error) {
         console.error("Ошибка редактирования слова", error);
   }
   };

   return (
      <CardsContext.Provider value={{ cards, setCards, updateCard, loading, error }}>
         {children}
      </CardsContext.Provider>
   );
};