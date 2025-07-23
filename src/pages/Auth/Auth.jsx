import { useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignupChange = (e) => {
    setSignupData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with email: ${loginEmail}`);
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    alert(`Signing up ${signupData.name} with email: ${signupData.email}`);
  };

  return (
    <>
      <div className="login_image">
        <img src="/images/login_signup.webp" alt="" />
      </div>
      <div className="auth-container">
        <div className="auth-box">
          <h1 className="auth-title">Prime Drink</h1>
          <p className="auth-subtitle">
            {isLogin
              ? "Refresh Your Senses"
              : "Join the Refreshment Revolution"}
          </p>
          <div className="auth-toggle">
            <button
              className={`toggle-btn ${isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button
              className={`toggle-btn ${!isLogin ? "active" : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
          {isLogin ? (
            <form className="auth-form" onSubmit={handleLoginSubmit}>
              <label htmlFor="loginEmail" className="auth-label">
                Email
              </label>
              <input
                type="email"
                id="loginEmail"
                className="auth-input"
                placeholder="you@example.com"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <label htmlFor="loginPassword" className="auth-label">
                Password
              </label>
              <input
                type="password"
                id="loginPassword"
                className="auth-input"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <button type="submit" className="auth-button">
                Log In
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={handleSignupSubmit}>
              <label htmlFor="name" className="auth-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="auth-input"
                placeholder="Your full name"
                value={signupData.name}
                onChange={handleSignupChange}
                required
              />
              <label htmlFor="email" className="auth-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="auth-input"
                placeholder="you@example.com"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="auth-input"
                placeholder="Create a password"
                value={signupData.password}
                onChange={handleSignupChange}
                required
                minLength={6}
              />
              <label htmlFor="confirmPassword" className="auth-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="auth-input"
                placeholder="Re-enter your password"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
                minLength={6}
              />
              <button type="submit" className="auth-button">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
