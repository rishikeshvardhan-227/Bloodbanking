import { Heart, Search, UserPlus, Activity } from "lucide-react";

function Home() {
  return (
    <>
      <section className="hero">

        <div className="hero-content">

          <div className="hero-tag">
            🩸 SMART BLOOD BANKING PLATFORM
          </div>

          <h1>
            Every Drop
            <br />
            <span>Can Save A Life.</span>
          </h1>

          <p>
            Connect with blood donors, hospitals and blood banks.
            Find the right blood type when it matters the most.
          </p>

          <div className="hero-buttons">

            <a href="/find-blood" className="primary-btn">
              <Search size={18} />
              Find Blood
            </a>

            <a href="/donate" className="secondary-btn">
              <UserPlus size={18} />
              Become a Donor
            </a>

          </div>

          <div className="hero-stats">

            <div>
              <strong>500+</strong>
              <span>Registered Donors</span>
            </div>

            <div>
              <strong>150+</strong>
              <span>Blood Units</span>
            </div>

            <div>
              <strong>24/7</strong>
              <span>Emergency Support</span>
            </div>

          </div>

        </div>

        <div className="hero-card">

          <div className="blood-drop">
            <Heart size={32} fill="currentColor" />
          </div>

          <h2>Blood Availability</h2>

          <p>Current available blood units</p>

          <div className="blood-groups">

            <div className="blood-box">
              <strong>A+</strong>
              <span>25 Units</span>
            </div>

            <div className="blood-box">
              <strong>B+</strong>
              <span>18 Units</span>
            </div>

            <div className="blood-box">
              <strong>O+</strong>
              <span>32 Units</span>
            </div>

            <div className="blood-box">
              <strong>AB+</strong>
              <span>12 Units</span>
            </div>

          </div>

          <a href="/find-blood" className="availability-btn">
            View All Availability →
          </a>

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          <Search />
          <h3>Find Blood</h3>
          <p>Quickly search for available blood near you.</p>
        </div>

        <div className="feature-card">
          <UserPlus />
          <h3>Donate Blood</h3>
          <p>Register as a donor and help save lives.</p>
        </div>

        <div className="feature-card">
          <Activity />
          <h3>Emergency Support</h3>
          <p>Find blood during critical medical situations.</p>
        </div>

      </section>
    </>
  );
}

export default Home;