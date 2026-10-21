import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

interface RootLayoutProps {
  isAuthenticated: boolean;
  onSignOut: () => void;
}

export function RootLayout({ isAuthenticated, onSignOut }: RootLayoutProps) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header isAuthenticated={isAuthenticated} onSignOut={onSignOut} />
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}