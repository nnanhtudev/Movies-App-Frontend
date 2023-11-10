import React from 'react';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";

import Browse from './pages/browse/Browse';
import Search from './pages/search/Search';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Browse />} />
				<Route path="/search" element={<Search />} />
			</Routes>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
			{/* Same as */}
		</BrowserRouter>
	);
}

export default App;
