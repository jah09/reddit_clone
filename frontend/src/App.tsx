import Layout from "@/components/Nav/Layout";
import LoginModal from "./components/modals/LoginModal";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Popular from "./pages/Popular";

import SignupModal from "./components/modals/SignupModal";
import SubredditForm from "./components/modals/SubredditForm";
import CreatePost from "./pages/CreatePost";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/create-subreddit-form" element={<SubredditForm />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignupModal />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
