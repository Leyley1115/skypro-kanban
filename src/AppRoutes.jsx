import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import { MainPage } from './pages/Main';
import NotFoundPage from './NotFound';

export function AppRoutes(){
	const [loading, setLoading] = useState(true);

	useEffect(() =>{
		setTimeout(() =>{
			setLoading(false);
		}, 3000);

	}, [])
	return (
        <Routes>
            <Route path="/" element={<MainPage loading={loading} />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
  )
}