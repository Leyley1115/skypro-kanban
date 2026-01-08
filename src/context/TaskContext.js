import { createContext } from "react";

export const CardsContext = createContext({
    cards: [],
    loading: false,
    error: "",

    isPopNewCardOpen: false, 
    setPopNewCard: () => {},

    isPopBrowseOpen: false, 
    setPopBrowseOpen: () => {}, 
    browseCardId: null, 
    setBrowseCardId: () => {},
});
