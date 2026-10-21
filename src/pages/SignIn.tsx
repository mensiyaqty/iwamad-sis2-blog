export function SignIn({ onSignIn }: { onSignIn: () => void }) {
  return (
    <div>
      <h2>Sign In Required</h2>
      <p>You must sign in to view the dashboard.</p>
      <button onClick={onSignIn}>Sign In</button>
    </div>
  );
}