import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Bookmarks from './pages/Bookmarks';
import Home from './pages/Home';
import Login from './components/Login';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/bookmarks" element={<Bookmarks />}></Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
