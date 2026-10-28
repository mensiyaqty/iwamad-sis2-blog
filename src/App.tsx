import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Postslist } from './pages/Postslist';
import { PostDetail } from './pages/PostDetail';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter basename="/iwamad-sis2-blog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Postslist />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        {isAuthenticated && <Route path="/dashboard" element={<Dashboard />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}