import { useState } from "react";
import { Mail, Lock, LogIn, Heart, Eye, EyeOff } from "lucide-react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoggedIn(true);
  };

  return (
    <div className="auth-page">

      <div className="auth-card">

        <div className="auth-logo">
          <Heart size={28} />
        </div>

        {!loggedIn ? (
          <>
            <div className="auth-heading">
              <p className="small-title">WELCOME BACK</p>
              <h1>Login to BloodCare</h1>
              <p>
                Access your donor and blood banking account.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="auth-input-group">
                <label>Email Address</label>

                <div className="auth-input">
                  <Mail size={18} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="auth-input-group">
                <label>Password</label>

                <div className="auth-input">
                  <Lock size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              <div className="auth-options">
                <label>
                  <input type="checkbox" />
                  Remember me
                </label>

                <button type="button">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="auth-submit"
              >
                <LogIn size={18} />
                Login
              </button>

            </form>

            <p className="auth-bottom">
              Don't have an account?
              <a href="/register"> Create one</a>
            </p>
          </>
        ) : (
          <div className="auth-success">

            <div className="success-circle">
              <Heart size={35} />
            </div>

            <h2>Login Successful!</h2>

            <p>
              Welcome back to BloodCare.
              You can now access your dashboard.
            </p>

            <a
              href="/dashboard"
              className="auth-dashboard-button"
            >
              Go to Dashboard
            </a>

          </div>
        )}

      </div>

    </div>
  );
}

export default Login;