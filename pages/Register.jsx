import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Droplet,
  UserPlus,
  Heart,
} from "lucide-react";

function Register() {
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="auth-page">

      <div className="register-card">

        <div className="auth-logo">
          <Heart size={28} />
        </div>

        {!registered ? (
          <>
            <div className="auth-heading">
              <p className="small-title">JOIN BLOODCARE</p>

              <h1>Create your account</h1>

              <p>
                Register to donate blood, find blood,
                and help save lives.
              </p>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="auth-input-group">
                <label>Full Name</label>

                <div className="auth-input">
                  <User size={18} />

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div className="auth-two-column">

                <div className="auth-input-group">
                  <label>Email</label>

                  <div className="auth-input">
                    <Mail size={18} />

                    <input
                      type="email"
                      placeholder="Email address"
                      required
                    />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label>Phone</label>

                  <div className="auth-input">
                    <Phone size={18} />

                    <input
                      type="tel"
                      placeholder="Phone number"
                      required
                    />
                  </div>
                </div>

              </div>

              <div className="auth-input-group">
                <label>Blood Group</label>

                <div className="auth-input">
                  <Droplet size={18} />

                  <select required defaultValue="">
                    <option value="" disabled>
                      Select blood group
                    </option>

                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                  </select>
                </div>
              </div>

              <div className="auth-two-column">

                <div className="auth-input-group">
                  <label>Password</label>

                  <div className="auth-input">
                    <Lock size={18} />

                    <input
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <div className="auth-input-group">
                  <label>Confirm Password</label>

                  <div className="auth-input">
                    <Lock size={18} />

                    <input
                      type="password"
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>

              </div>

              <label className="register-checkbox">
                <input type="checkbox" required />

                <span>
                  I agree to the BloodCare terms and
                  confirm that my information is correct.
                </span>
              </label>

              <button
                type="submit"
                className="auth-submit"
              >
                <UserPlus size={18} />
                Create Account
              </button>

            </form>

            <p className="auth-bottom">
              Already have an account?
              <a href="/login"> Login</a>
            </p>
          </>
        ) : (
          <div className="auth-success">

            <div className="success-circle">
              <Heart size={35} />
            </div>

            <h2>Account Created!</h2>

            <p>
              Your BloodCare account has been successfully
              created.
            </p>

            <a
              href="/login"
              className="auth-dashboard-button"
            >
              Continue to Login
            </a>

          </div>
        )}

      </div>

    </div>
  );
}

export default Register;