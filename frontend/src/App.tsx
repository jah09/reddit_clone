import { Button } from '@/components/ui/Button';
import Layout from '@/components/Layout';
import LoginModal from './components/modals/LoginModal';
import Home from './components/Home';

import SignupModal from './components/modals/SignupModal';
import SubredditForm from "./components/modals/SubredditForm";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignupModal />} />
          <Route path="/create-subreddit-form" element={<SubredditForm />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
