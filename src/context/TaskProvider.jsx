import { useContext, useState, useEffect } from "react";
import { fetchCards } from "../services/api";
import { AuthContext } from "./AuthContext";
import { CardsContext } from "./TaskContext";
import { editCard, deleteCardApi } from "../services/api";
import { postCard } from "../services/api";


export const CardsProvider = ({ children }) => {
   const [cards, setCards] = useState([]); //содержит карточки
   const [loading, setLoading] = useState(false); //состояние загрузки
   const [error, setError] = useState(""); //текст ошибки
   const { user } = useContext(AuthContext); //для получения токена

   const [isPopNewCardOpen, setPopNewCard] = useState(() => {
      const saved = localStorage.getItem("isPopNewCardOpen");
      return saved ? JSON.parse(saved) : false;
   });

   useEffect(() => {
   localStorage.setItem("isPopNewCardOpen", JSON.stringify(isPopNewCardOpen));
   }, [isPopNewCardOpen]);

   const [isPopBrowseOpen, setPopBrowseOpen] = useState(false); 
   const [browseCardId, setBrowseCardId] = useState(() => { return localStorage.getItem("browseCardId") || null; });

   useEffect(() => { 
      const loadCards = async () => { 
         try { 
            const data = await fetchCards({ 
               token: user.token 
            }); 
            if (data) setCards(data.tasks); 
         } catch (error) { 
            setError(error.message); 
         } finally { setLoading(false); 

         } 
      }; 
      loadCards(); 
   }, [user.token]);
   
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

   const deleteCard = async (id) => {
   try {
      const newCards = await deleteCardApi({
         token: user?.token,
         id,
      });

      setCards(newCards);
   } catch (error) {
      console.error("Ошибка удаления карточки", error);
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

   const addNewCard = async ({ card }) => {
      try {
         const newCards = await postCard({ 
            token: user?.token, 
            card 
         });
         setCards(newCards);
      } catch (error) {
         console.error("Ошибка добавления карточки", error);
      }
   };

   return (
      <CardsContext.Provider value={{ 
         cards, 
         setCards, 
         updateCard, 
         deleteCard, 
         loading, 
         error, 
         addNewCard, 

         isPopNewCardOpen,
         setPopNewCard,

         isPopBrowseOpen,
         setPopBrowseOpen,
         browseCardId,
         setBrowseCardId,
      }}>
         {children}
      </CardsContext.Provider>
   );
};   