import { Outlet } from 'react-router-dom'
import Main from '../components/Main/Main_f.jsx'
import Header from '../components/Header/Header.jsx'
import { PopNewCard } from '../components/PopNewCard/PopNewCard.jsx'
import { PopBrowse } from '../components/PopBrowse/PopBrowse.jsx'




export function MainPage({loading, isAuth}){
    return(
    <>
    <div className="wrapper">
      <PopNewCard />
      <PopBrowse />
      <Header isAuth={isAuth}/>
      <Outlet />
      <Main loading={loading}/>
    </div>
    </>
    )
}