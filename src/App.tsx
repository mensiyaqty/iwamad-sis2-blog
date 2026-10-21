/// <reference types="vite/client" />
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { Home } from './pages/Home';
import { PostsList } from './pages/PostsList';
import { PostDetail } from './pages/PostDetail';
import { Contact } from './pages/Contact';
import { SignIn } from './pages/SignIn';
import { Dashboard } from './pages/Dashboard';
import { NotFound } from './pages/NotFound';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<RootLayout isAuthenticated={isAuthenticated} onSignOut={() => setIsAuthenticated(false)} />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route 
            path="/dashboard" 
            element={
              isAuthenticated ? <Dashboard /> : <SignIn onSignIn={() => setIsAuthenticated(true)} />
            } 
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;