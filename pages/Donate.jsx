import { useState } from "react";
import { Heart, User, Phone, MapPin, Droplet, Calendar, CheckCircle } from "lucide-react";

function Donate() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="donate-page">

      <section className="donate-header">
        <div>
          <p className="small-title">BECOME A DONOR</p>

          <h1>
            Your blood can
            <br />
            <span>save a life.</span>
          </h1>

          <p>
            Every blood donation can help someone in their
            most critical moment. Register today and become
            a part of our donor community.
          </p>
        </div>

        <div className="donate-heart">
          <Heart size={80} />
        </div>
      </section>

      <section className="donor-section">

        <div className="donor-card">

          <div className="donor-card-heading">
            <div className="donor-heading-icon">
              <Heart size={25} />
            </div>

            <div>
              <h2>Donor Registration</h2>
              <p>Enter your details to register as a blood donor.</p>
            </div>
          </div>

          {submitted ? (

            <div className="donation-success">

              <div className="success-icon">
                <CheckCircle size={55} />
              </div>

              <h2>Registration Successful!</h2>

              <p>
                Thank you for registering as a blood donor.
                Your contribution can help save lives.
              </p>

              <button
                className="register-again"
                onClick={() => setSubmitted(false)}
              >
                Register Another Donor
              </button>

            </div>

          ) : (

            <form
              className="donor-form"
              onSubmit={handleSubmit}
            >

              <div className="form-row">

                <div className="donor-input-group">
                  <label>Full Name</label>

                  <div className="donor-input">
                    <User size={18} />

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="donor-input-group">
                  <label>Phone Number</label>

                  <div className="donor-input">
                    <Phone size={18} />

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

              </div>

              <div className="form-row">

                <div className="donor-input-group">
                  <label>Blood Group</label>

                  <div className="donor-input">
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

                <div className="donor-input-group">
                  <label>Date of Birth</label>

                  <div className="donor-input">
                    <Calendar size={18} />

                    <input
                      type="date"
                      required
                    />
                  </div>
                </div>

              </div>

              <div className="form-row">

                <div className="donor-input-group">
                  <label>City / Location</label>

                  <div className="donor-input">
                    <MapPin size={18} />

                    <input
                      type="text"
                      placeholder="Enter your city"
                      required
                    />
                  </div>
                </div>

                <div className="donor-input-group">
                  <label>Last Blood Donation</label>

                  <div className="donor-input">
                    <Calendar size={18} />

                    <input type="date" />
                  </div>
                </div>

              </div>

              <label className="donor-checkbox">

                <input
                  type="checkbox"
                  required
                />

                <span>
                  I confirm that the information provided is
                  correct and I am willing to donate blood.
                </span>

              </label>

              <button
                type="submit"
                className="donor-submit"
              >
                <Heart size={19} />
                Register as Donor
              </button>

            </form>

          )}

        </div>

      </section>

    </div>
  );
}

export default Donate;