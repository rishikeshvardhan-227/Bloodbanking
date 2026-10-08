import { useState } from "react";
import { Search, MapPin, Droplet } from "lucide-react";

function FindBlood() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [location, setLocation] = useState("");
  const [searched, setSearched] = useState(false);

  const bloodStock = {
    "A+": 25,
    "A-": 8,
    "B+": 18,
    "B-": 6,
    "O+": 32,
    "O-": 10,
    "AB+": 12,
    "AB-": 4,
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (bloodGroup && location) {
      setSearched(true);
    }
  };

  return (
    <div className="find-blood-page">

      {/* Header */}
      <section className="find-blood-header">
        <div>
          <p className="small-title">BLOOD AVAILABILITY</p>

          <h1>
            Find the right blood
            <br />
            <span>when it matters most.</span>
          </h1>

          <p>
            Search for available blood units near your location
            and get help when you need it.
          </p>
        </div>
      </section>

      {/* Search Card */}
      <section className="blood-search-section">
        <div className="search-card">

          <div className="search-card-title">
            <Droplet size={28} />
            <div>
              <h2>Search Blood Availability</h2>
              <p>Choose a blood group and your location.</p>
            </div>
          </div>

          <form onSubmit={handleSearch}>

            {/* Blood Group */}
            <div className="input-group">
              <label>Blood Group</label>

              <div className="input-box">
                <Droplet size={19} />

                <select
                  value={bloodGroup}
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
              </div>
            </div>

            {/* Location */}
            <div className="input-group">
              <label>Location</label>

              <div className="input-box">
                <MapPin size={19} />

                <input
                  type="text"
                  placeholder="Enter city or location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="search-button" type="submit">
              <Search size={20} />
              Search Blood
            </button>

          </form>
        </div>
      </section>

      {/* Results */}
      {searched && (
        <section className="results-section">

          <div className="results-heading">
            <div>
              <p className="small-title">SEARCH RESULTS</p>

              <h2>
                Available {bloodGroup} blood
              </h2>

              <p>
                Showing availability near {location}
              </p>
            </div>
          </div>

          <div className="blood-result-card">

            <div className="blood-icon">
              <Droplet size={28} />
            </div>

            <div className="blood-info">
              <h3>{bloodGroup} Blood</h3>
              <p>
                Blood units currently available
              </p>
            </div>

            <div className="units">
              <strong>
                {bloodStock[bloodGroup]}
              </strong>
              <span>Units</span>
            </div>

            <button className="request-button">
              Request Blood
            </button>

          </div>

        </section>
      )}

    </div>
  );
}

export default FindBlood;