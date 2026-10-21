import { NavLink } from 'react-router-dom';

export function Header({ isAuthenticated, onSignOut }: { isAuthenticated: boolean; onSignOut: () => void }) {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc', display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <NavLink to="/" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Home</NavLink>
      <NavLink to="/posts" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Posts</NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Contact</NavLink>
      <NavLink to="/dashboard" style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}>Dashboard (Protected)</NavLink>
      {isAuthenticated && (
        <button onClick={onSignOut} style={{ marginLeft: 'auto' }}>Sign Out</button>
      )}
    </header>
  );
}