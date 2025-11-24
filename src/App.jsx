import { useState } from 'react'
import './App.css'

import Main from './components/Main/Main_f.jsx'
import Header from './components/Header/Header.jsx'
import { PopNewCard } from './components/PopNewCard/PopNewCard.jsx'
import { PopBrowse } from './components/PopBrowse/PopBrowse.jsx'
import { PopUser } from './components/PopUser/PopUser.jsx'

function App() {
	useState(0)
	return (
    <>
      <div className="wrapper">
		{/* <!-- pop-up start--> */}
		<PopUser />
		<PopNewCard />
		<PopBrowse />
		{/* <!-- pop-up end--> */}
		<Header />
		<Main />
		
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
