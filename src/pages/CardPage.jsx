import { useContext, useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editCard } from "../services/api";
import { PopBrowse } from "../components/PopBrowse/PopBrowse";
import { CardsContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";


export const CardPage = () => {
  const { id } = useParams();
  const {cards, setCards} = useContext(CardsContext);
  const [isEditing, setIsEditing] = useState(false);
  const {user} = useContext(AuthContext);

  const [editableCard, setEditableCard] = useState({
    topic: '',
    id: '',
    date: '',
    title: '',
    description: '',
  })

  const card = useMemo(
    () => cards.find((c) => c.id === id) || { 
      topic: "",
      id: '',
      date: '',
      title: '',
      description: '',
    },
    [id, cards]
  );

  useEffect(() => {
    if(card){
      setEditableCard({
        topic: card.topic,
        id: card._id,
        date: card.date,
        title: card.title,
        description: card.description,
      });
    }
  }, [card]);

  const startEditing = () => {
    setEditableCard({
      topic: card.topic,
      id: card._id,
      date: card.date,
      title: card.title,
      description: card.description,
    })
    setIsEditing(true);
  }

  const handleInputChange = (e, field) => {
    setEditableCard({
      ...editableCard,
      [field]: e.target.value,
    });
  };

  const saveChanges = async () => {
    try {
        const useInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        const updateCards = await editCard({
          token: user.token,
          topic: editableCard.topic,
          id,
          date: editableCard.date,
          title: editableCard.title,
          description: editableCard.description,
        });
        setCards(updateCards);
        setIsEditing(false);
    } catch (error){
        console.error('Ошибка при сохранении изсенений:', error.message);
    }
  };

 return (
 <>
    {!isEditing && (
      <PopBrowse
        editableCard={editableCard}
        handleInputChange={handleInputChange}
        saveChanges={saveChanges}
        cancel={() => setIsEditing(false)}
        isEditing={!isEditing}
        id = {id}
      />
    )}
  </>
  );
};
