import Main from '../components/Main/Main_f.jsx'
import Header from '../components/Header/Header.jsx'
import { PopNewCard } from '../components/PopNewCard/PopNewCard.jsx'
import { PopBrowse } from '../components/PopBrowse/PopBrowse.jsx'
import {fetchCards} from '../services/api.js'

import { Outlet } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'

export function MainPage({isAuth}){
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState('');
  const getCards = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCards({
      // пока у нас не реализована авторизация, передаём токен вручную
      token: 'bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck',
      });
      console.log('API data:', data.tasks);
      if (data) setCards(data.tasks);
      } catch (err) {
        // console.log('ОШИБКА ПОПАЛА В CATCH:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
  }, []);

  useEffect(() => {
      getCards();
  }, [getCards]);

    return(
    <>
    <div className="wrapper">
      <PopNewCard />
      <PopBrowse />
      <Header isAuth={isAuth}/>
      <Outlet />
      <Main loading={loading} error={error} cards={cards}/>
    </div>
    </>
    )
}