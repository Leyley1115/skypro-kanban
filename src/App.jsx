import { useState } from 'react'
import './App.css'

import Main from './components/Main_f.jsx'
import Header from './components/Header.jsx'
import { PopNewCard } from './components/PopNewCard.jsx'
import { PopBrowse } from './components/PopBrowse.jsx'
import { PopUser } from './components/PopUser.jsx'

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
