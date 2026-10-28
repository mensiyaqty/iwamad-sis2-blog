export const SignIn = ({ setIsAuthenticated }: { setIsAuthenticated: (val: boolean) => void }) => (
  <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>Sign In</h1>
    <button onClick={() => setIsAuthenticated(true)}>Log In</button>
  </div>
);