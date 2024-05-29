import { Button } from '@/components/ui/Button';
import Layout from '@/components/Layout';
import LoginModal from './components/LoginModal';
import Home from './components/Home';

import SignupModal from './components/SignupModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Layout>
			<Routes>
			<Route path="/"  element={<Home />}/>

			<Route path="/login"  element={<LoginModal />}/>
			<Route path="/signup"  element={<SignupModal />}/>	
			</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
