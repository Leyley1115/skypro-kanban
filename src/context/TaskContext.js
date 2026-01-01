import { createContext } from "react";

export const CardsContext = createContext({
    cards: [],
    loading: false,
    error: "",
});
