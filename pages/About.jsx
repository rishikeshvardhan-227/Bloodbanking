import { Heart, ShieldCheck, Users, Activity } from "lucide-react";

function About() {

  return (
    <div className="page">

      <div className="page-heading">

        <span>ABOUT US</span>

        <h1>
          Technology That <strong>Saves Lives.</strong>
        </h1>

        <p>
          BloodCare is a smart blood banking platform designed
          to connect donors, hospitals and blood banks.
        </p>

      </div>

      <div className="about-content">

        <div className="about-text">

          <h2>Our Mission</h2>

          <p>
            Our mission is to make blood availability faster,
            easier and more reliable during medical emergencies.
          </p>

          <p>
            The platform allows donors to register, hospitals
            to manage blood requirements and users to find
            available blood quickly.
          </p>

        </div>

        <div className="about-features">

          <div>
            <Heart />
            <h3>Save Lives</h3>
            <p>Connect people who need blood with donors.</p>
          </div>

          <div>
            <ShieldCheck />
            <h3>Reliable</h3>
            <p>Efficient blood inventory management.</p>
          </div>

          <div>
            <Users />
            <h3>Connected</h3>
            <p>Donors, hospitals and blood banks together.</p>
          </div>

          <div>
            <Activity />
            <h3>Fast Response</h3>
            <p>Quick access during emergencies.</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;