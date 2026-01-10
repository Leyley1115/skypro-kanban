import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import { MainPage } from './pages/MainPage';
import NotFoundPage from './pages/NotFound';
import ExitPage from './pages/ExitPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PrivateRoute from './pages/PrivateRoute';
import { CardsProvider } from './context/TaskProvider';
import { PopBrowse } from './components/PopBrowse/PopBrowse';


export function AppRoutes(){
	const [isAuth, setIsAuth] = useState(false);

	return (
        <Routes>
			<Route element={<PrivateRoute isAuth={isAuth} />}>
				<Route path="/" element={
					<CardsProvider>
						<MainPage setIsAuth={setIsAuth}/>
					</CardsProvider>}
					>
					<Route path="exit" element={<ExitPage setIsAuth = {setIsAuth}/>} />
					<Route path="card/:id" element={<PopBrowse />} />
				</Route>
			</Route>
			<Route path="/login" element={<SignInPage setIsAuth = {setIsAuth}/>} />
			<Route path="/register" element={<SignUpPage setIsAuth = {setIsAuth}/>} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
  )
}