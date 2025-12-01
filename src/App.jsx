import { useState, useEffect } from 'react'
import './App.css'

import Main from './components/Main/Main_f.jsx'
import Header from './components/Header/Header.jsx'
import { PopNewCard } from './components/PopNewCard/PopNewCard.jsx'
import { PopBrowse } from './components/PopBrowse/PopBrowse.jsx'
import { PopUser } from './components/PopUser/PopUser.jsx'

function App() {
	useState(0)
	const [loading, setLoading] = useState(1);

	useEffect(() =>{
		setTimeout(() =>{
			setLoading(0);
		}, 3000);

	}, [])
	return (
    <>
      <div className="wrapper">
		<PopUser />
		<PopNewCard />
		<PopBrowse />
		<Header />
		<Main loading={loading}/>
		
    </div>

    <script src="js/script.js"></script>
    </>
  )
}

export default App
