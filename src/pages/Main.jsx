import Main from '../components/Main/Main_f.jsx'
import Header from '../components/Header/Header.jsx'
import { PopNewCard } from '../components/PopNewCard/PopNewCard.jsx'
import { PopBrowse } from '../components/PopBrowse/PopBrowse.jsx'
import { PopUser } from '../components/PopUser/PopUser.jsx'


export function MainPage({loading}){
    return(
    <>
    <div className="wrapper">
      <PopUser />
      <PopNewCard />
      <PopBrowse />
      <Header />
      <Main loading={loading}/>
    </div>
    </>
    )
}