import "../styles/auth.css";

export default function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Welcome to Connect</h1>
        <form className="auth-form">
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Create Account</button>
        </form>

        <p className="toggle-text">
          Already have an account?{" "}
          <a href="/signin" className="link-btn">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
