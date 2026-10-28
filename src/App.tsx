import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Home } from './pages/Home';
import { Postslist } from './pages/Postslist';
import { PostDetail } from './pages/PostDetail';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => setIsAuthenticated(true);

  return (
    <BrowserRouter basename="/iwamad-sis2-blog">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Postslist />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />

        {/* Authentication routes */}
        <Route
          path="/signin"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignIn setIsAuthenticated={handleLogin} />
            )
          }
        />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <Dashboard />
            ) : (
              <Navigate to="/signin" replace />
            )
          }
        />

        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;