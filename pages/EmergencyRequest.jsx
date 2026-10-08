import { useState } from "react";
import {
  AlertTriangle,
  User,
  Phone,
  Droplet,
  MapPin,
  Hospital,
  Calendar,
  CheckCircle,
} from "lucide-react";

function EmergencyRequest() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="emergency-page">

      <section className="emergency-header">

        <div>
          <p className="small-title">EMERGENCY BLOOD REQUEST</p>

          <h1>
            Need blood
            <span> urgently?</span>
          </h1>

          <p>
            Submit an emergency blood request and help us
            connect you with available blood resources quickly.
          </p>
        </div>

        <div className="emergency-icon">
          <AlertTriangle size={70} />
        </div>

      </section>


      <section className="emergency-section">

        <div className="emergency-card">

          {!submitted ? (

            <>
              <div className="emergency-card-heading">

                <div className="emergency-heading-icon">
                  <AlertTriangle size={25} />
                </div>

                <div>
                  <h2>Emergency Request</h2>

                  <p>
                    Please provide accurate information.
                  </p>
                </div>

              </div>


              <form
                className="emergency-form"
                onSubmit={handleSubmit}
              >

                <div className="emergency-row">

                  <div className="emergency-input-group">

                    <label>Patient Name</label>

                    <div className="emergency-input">
                      <User size={18} />

                      <input
                        type="text"
                        placeholder="Enter patient name"
                        required
                      />
                    </div>

                  </div>


                  <div className="emergency-input-group">

                    <label>Contact Number</label>

                    <div className="emergency-input">
                      <Phone size={18} />

                      <input
                        type="tel"
                        placeholder="Enter contact number"
                        required
                      />
                    </div>

                  </div>

                </div>


                <div className="emergency-row">

                  <div className="emergency-input-group">

                    <label>Blood Group</label>

                    <div className="emergency-input">
                      <Droplet size={18} />

                      <select
                        required
                        defaultValue=""
                      >
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


                  <div className="emergency-input-group">

                    <label>Units Required</label>

                    <div className="emergency-input">
                      <Droplet size={18} />

                      <input
                        type="number"
                        min="1"
                        max="20"
                        placeholder="Number of units"
                        required
                      />
                    </div>

                  </div>

                </div>


                <div className="emergency-row">

                  <div className="emergency-input-group">

                    <label>Hospital Name</label>

                    <div className="emergency-input">
                      <Hospital size={18} />

                      <input
                        type="text"
                        placeholder="Enter hospital name"
                        required
                      />
                    </div>

                  </div>


                  <div className="emergency-input-group">

                    <label>Hospital Location</label>

                    <div className="emergency-input">
                      <MapPin size={18} />

                      <input
                        type="text"
                        placeholder="Enter hospital location"
                        required
                      />
                    </div>

                  </div>

                </div>


                <div className="emergency-input-group">

                  <label>Required Date</label>

                  <div className="emergency-input">
                    <Calendar size={18} />

                    <input
                      type="date"
                      required
                    />
                  </div>

                </div>


                <div className="emergency-notice">

                  <AlertTriangle size={18} />

                  <span>
                    Please submit an emergency request only
                    when blood is urgently required.
                  </span>

                </div>


                <button
                  type="submit"
                  className="emergency-submit"
                >
                  <AlertTriangle size={19} />
                  Submit Emergency Request
                </button>

              </form>
            </>

          ) : (

            <div className="emergency-success">

              <div className="emergency-success-icon">
                <CheckCircle size={60} />
              </div>

              <h2>
                Request Submitted
              </h2>

              <p>
                Your emergency blood request has been
                successfully submitted. Our blood bank team
                can now process the request.
              </p>

              <button
                className="new-request-button"
                onClick={() => setSubmitted(false)}
              >
                Submit Another Request
              </button>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default EmergencyRequest;