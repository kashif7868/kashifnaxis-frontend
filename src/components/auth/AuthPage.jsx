import React, { useState } from "react";
import "../../assets/css/MyAccount/authpage.css";
import { FaUser, FaEye, FaEyeSlash, FaLock, FaFacebook } from "react-icons/fa";
import { useAuth } from "../../context/authContext"; // Import useAuth from the context
import { FcGoogle } from "react-icons/fc";
const AuthPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [message, setMessage] = useState("");

  const { signUp, login, forgotPassword, googleLogin, facebookLogin } =
    useAuth(); // Destructure methods from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    if (isSignUp && !fullName) {
      setError("Full name is required");
      return;
    }

    setError(""); // Clear previous errors

    if (isSignUp) {
      await signUp({ fullName, email, password });
    } else {
      await login({ email, password });
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    setError("");
    try {
      await forgotPassword(email);
      setMessage("Please check your email for the password reset link.");
    } catch (err) {
      setError("Failed to send reset email. Please try again.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const handleBackToSignIn = () => {
    setIsForgotPassword(false);
    setEmail("");
  };

  const handleGoogleLogin = async () => {
    try {
      const googleToken = "googleAuthToken"; // Replace with actual Google token
      await googleLogin(googleToken); // Trigger Google login
    } catch (error) {
      setError("Google login failed.");
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const facebookToken = "facebookAuthToken"; // Replace with actual Facebook token
      await facebookLogin(facebookToken); // Trigger Facebook login
    } catch (error) {
      setError("Facebook login failed.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form-container">
        <h1 className="auth-title">
          {isSignUp
            ? "Sign Up"
            : isForgotPassword
            ? "Reset Password"
            : "Sign In"}
        </h1>
        {error && <div className="auth-error">{error}</div>}
        {message && <div className="auth-message">{message}</div>}

        <form
          onSubmit={isForgotPassword ? handleResetPassword : handleSubmit}
          className="auth-form"
        >
          {isSignUp && (
            <div className="auth-form-group">
              <FaUser className="auth-icon" />
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder=" "
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="auth-input"
              />
              <label htmlFor="fullName" className="auth-label">
                Full Name
              </label>
            </div>
          )}

          <div className="auth-form-group">
            <FaUser className="auth-icon" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />
            <label htmlFor="email" className="auth-label">
              Email
            </label>
          </div>

          {!isForgotPassword && (
            <div className="auth-form-group password-field">
              <FaLock className="auth-icon" />
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="auth-input"
              />
              <label htmlFor="password" className="auth-label">
                Password
              </label>
              <div
                className="auth-password-toggle"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
          )}

          <button type="submit" className="auth-btn">
            {isSignUp
              ? "Sign Up"
              : isForgotPassword
              ? "Send Email to Reset Password"
              : "Sign In"}
          </button>

          {!isForgotPassword && !isSignUp && (
            <div className="auth-forgot-password">
              <p onClick={handleForgotPassword} className="auth-toggle">
                Forgot Password?
              </p>
            </div>
          )}

          {isForgotPassword && (
            <div className="auth-switch">
              <p onClick={handleBackToSignIn} className="auth-toggle">
                Back to Sign In
              </p>
            </div>
          )}

          {!isForgotPassword && (
            <div className="auth-switch">
              <p onClick={() => setIsSignUp(!isSignUp)} className="auth-toggle">
                {isSignUp
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </p>
            </div>
          )}

          {/* Social Authentication Buttons */}
          {!isForgotPassword && (
            <div className="auth-social-buttons">
              <button
                type="button"
                className="auth-social-btn google-btn"
                onClick={handleGoogleLogin}
              >
               Sign In with  <FcGoogle className="auth-social-icon" /> 
              </button>
              <button
                type="button"
                className="auth-social-btn facebook-btn"
                onClick={handleFacebookLogin}
              >
                Sign In with
                <FaFacebook className="auth-social-icon" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
