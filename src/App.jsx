import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Main } from './pages/Main';
import { NotFound404 } from './pages/NotFound404';
import { Room } from './pages/Room';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/room/:id' element={<Room />}></Route>
				<Route path='/' element={<Main />}></Route>
				<Route path='*' element={<NotFound404 />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
