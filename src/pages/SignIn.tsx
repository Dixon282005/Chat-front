import '../styles/auth.css'


export default function SignIn() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome Back, chatter!</h1>

        <form className="auth-form">
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Sign In</button>
        </form>

        <p className="toggle-text">
          Don't have an account? {" "}
          <a href="/signup" className="link-btn">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
