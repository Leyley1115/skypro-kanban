import Main from '../components/Main/Main_f.jsx';
import Header from '../components/Header/Header.jsx';
import { PopNewCard } from '../components/PopNewCard/PopNewCard.jsx';
import { PopBrowse } from '../components/PopBrowse/PopBrowse.jsx';

import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { CardsContext } from '../context/TaskContext.js';

export function MainPage({ isAuth }) {
  const { 
    cards, 
    loading, 
    error, 
    isPopNewCardOpen,
    isPopBrowseOpen, 
    browseCardId,
  } = useContext(CardsContext);

  return (
    <div className="wrapper">
      {isPopNewCardOpen && <PopNewCard isOpen={isPopNewCardOpen}/>}
      {isPopBrowseOpen && browseCardId && <PopBrowse id={browseCardId} />}
      <Header isAuth={isAuth} />
      <Outlet />
      <Main loading={loading} error={error} cards={cards} />
    </div>
  );
}
