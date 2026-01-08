import { createContext } from "react";

export const CardsContext = createContext({
    cards: [],
    loading: false,
    error: "",

    //для новой задачи
    isPopNewCardOpen: false, 
    setPopNewCard: () => {},

    // для просмотра/редактирования старой
    isPopBrowseOpen: false, 
    setPopBrowseOpen: () => {}, 
    browseCardId: null, 
    setBrowseCardId: () => {},
});
