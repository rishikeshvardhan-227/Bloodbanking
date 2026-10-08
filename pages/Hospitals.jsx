import { useState } from "react";
import {
  Hospital as HospitalIcon,
  MapPin,
  Phone,
  Droplet,
  Search,
  AlertCircle,
} from "lucide-react";

const hospitalsData = [
  {
    name: "City Care Hospital",
    location: "Vijayawada",
    phone: "+91 98765 43210",
    status: "Emergency",
    required: "O+",
    units: 8,
  },
  {
    name: "LifeLine Medical Center",
    location: "Guntur",
    phone: "+91 91234 56789",
    status: "Normal",
    required: "A+",
    units: 5,
  },
  {
    name: "Apollo Hospitals",
    location: "Hyderabad",
    phone: "+91 99887 66554",
    status: "Emergency",
    required: "B+",
    units: 10,
  },
  {
    name: "Red Cross Hospital",
    location: "Tenali",
    phone: "+91 90123 45678",
    status: "Normal",
    required: "AB+",
    units: 4,
  },
];

function Hospitals() {
  const [search, setSearch] = useState("");

  const filteredHospitals = hospitalsData.filter((hospital) =>
    `${hospital.name} ${hospital.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="hospitals-page">

      {/* HEADER */}

      <section className="hospitals-header">

        <div>
          <p className="small-title">HEALTHCARE NETWORK</p>

          <h1>
            Hospitals &{" "}
            <span>Blood Requirements</span>
          </h1>

          <p>
            Connect with hospitals and help provide blood
            during critical situations.
          </p>
        </div>

        <div className="hospital-header-icon">
          <HospitalIcon size={75} />
        </div>

      </section>


      {/* SEARCH */}

      <section className="hospital-search-section">

        <div className="hospital-search">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search hospital or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </section>


      {/* HOSPITAL CARDS */}

      <section className="hospital-list">

        <div className="hospital-list-heading">

          <div>
            <p className="small-title">REGISTERED HOSPITALS</p>

            <h2>
              Blood requirements
            </h2>
          </div>

          <span>
            {filteredHospitals.length} Hospitals
          </span>

        </div>


        <div className="hospital-grid">

          {filteredHospitals.length > 0 ? (

            filteredHospitals.map((hospital) => (

              <div
                className="hospital-card"
                key={hospital.name}
              >

                {/* CARD TOP */}

                <div className="hospital-card-top">

                  <div className="hospital-icon">
                    <HospitalIcon size={25} />
                  </div>

                  <div>

                    <h3>
                      {hospital.name}
                    </h3>

                    <p className="hospital-location">
                      <MapPin size={14} />
                      {hospital.location}
                    </p>

                  </div>

                </div>


                {/* STATUS */}

                <div
                  className={
                    hospital.status === "Emergency"
                      ? "hospital-status emergency"
                      : "hospital-status normal"
                  }
                >

                  {hospital.status === "Emergency" ? (
                    <AlertCircle size={16} />
                  ) : (
                    <Droplet size={16} />
                  )}

                  {hospital.status}

                </div>


                {/* REQUIREMENT */}

                <div className="blood-requirement">

                  <div>

                    <span>
                      Blood Required
                    </span>

                    <strong>
                      {hospital.required}
                    </strong>

                  </div>

                  <div>

                    <span>
                      Units Needed
                    </span>

                    <strong>
                      {hospital.units}
                    </strong>

                  </div>

                </div>


                {/* CONTACT */}

                <button
                  className="contact-hospital"
                  onClick={() =>
                    alert(
                      `Calling ${hospital.name} at ${hospital.phone}`
                    )
                  }
                >

                  <Phone size={17} />

                  Contact Hospital

                </button>

              </div>

            ))

          ) : (

            <div className="hospital-no-results">

              <HospitalIcon size={40} />

              <h3>
                No hospitals found
              </h3>

              <p>
                Try searching for another hospital or location.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Hospitals;