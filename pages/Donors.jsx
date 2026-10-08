import { useState } from "react";
import {
  Users,
  Search,
  MapPin,
  Phone,
  Droplet,
  Calendar,
  CheckCircle,
} from "lucide-react";

const donorsData = [
  {
    name: "Rahul Kumar",
    blood: "O+",
    phone: "+91 98765 43210",
    location: "Vijayawada",
    lastDonation: "12 Aug 2026",
    available: true,
  },
  {
    name: "Ananya Reddy",
    blood: "A+",
    phone: "+91 91234 56789",
    location: "Guntur",
    lastDonation: "20 Jul 2026",
    available: true,
  },
  {
    name: "Arjun Varma",
    blood: "B+",
    phone: "+91 99887 66554",
    location: "Hyderabad",
    lastDonation: "05 Jun 2026",
    available: false,
  },
  {
    name: "Sneha Rao",
    blood: "AB+",
    phone: "+91 90123 45678",
    location: "Tenali",
    lastDonation: "18 Aug 2026",
    available: true,
  },
  {
    name: "Kiran Reddy",
    blood: "O-",
    phone: "+91 93456 78901",
    location: "Vijayawada",
    lastDonation: "10 May 2026",
    available: true,
  },
  {
    name: "Priya Sharma",
    blood: "B-",
    phone: "+91 87654 32109",
    location: "Guntur",
    lastDonation: "25 Apr 2026",
    available: false,
  },
];

function Donors() {
  const [search, setSearch] = useState("");
  const [bloodFilter, setBloodFilter] = useState("All");

  const filteredDonors = donorsData.filter((donor) => {
    const matchesSearch =
      `${donor.name} ${donor.location} ${donor.blood}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesBlood =
      bloodFilter === "All" ||
      donor.blood === bloodFilter;

    return matchesSearch && matchesBlood;
  });

  return (
    <div className="donors-page">

      {/* HEADER */}

      <section className="donors-header">

        <div>
          <p className="small-title">
            DONOR MANAGEMENT
          </p>

          <h1>
            Our Blood
            <span> Donors</span>
          </h1>

          <p>
            Find registered blood donors and connect
            them with people who need help.
          </p>
        </div>

        <div className="donors-header-icon">
          <Users size={70} />
        </div>

      </section>


      {/* CONTENT */}

      <section className="donors-content">

        {/* SEARCH AND FILTER */}

        <div className="donor-tools">

          <div className="donor-search">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search donor, blood group or location..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <select
            className="blood-filter"
            value={bloodFilter}
            onChange={(e) =>
              setBloodFilter(e.target.value)
            }
          >
            <option value="All">
              All Blood Groups
            </option>

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


        {/* SUMMARY */}

        <div className="donor-summary">

          <div>
            <Users size={20} />
            <strong>
              {filteredDonors.length}
            </strong>
            <span>Donors Found</span>
          </div>

          <div>
            <Droplet size={20} />
            <strong>
              {filteredDonors.filter(
                (donor) => donor.available
              ).length}
            </strong>
            <span>Available Now</span>
          </div>

        </div>


        {/* DONOR LIST */}

        <div className="donors-heading">

          <div>
            <p className="small-title">
              REGISTERED DONORS
            </p>

            <h2>
              Donor Directory
            </h2>
          </div>

        </div>


        <div className="donor-grid">

          {filteredDonors.length > 0 ? (

            filteredDonors.map((donor) => (

              <div
                className="donor-card"
                key={donor.name}
              >

                {/* TOP */}

                <div className="donor-card-top">

                  <div className="donor-avatar">
                    {donor.name.charAt(0)}
                  </div>

                  <div className="donor-name">

                    <h3>
                      {donor.name}
                    </h3>

                    <div className="donor-location">
                      <MapPin size={13} />
                      {donor.location}
                    </div>

                  </div>

                  <div className="donor-blood">
                    {donor.blood}
                  </div>

                </div>


                {/* DETAILS */}

                <div className="donor-details">

                  <div>
                    <Phone size={16} />

                    <span>
                      {donor.phone}
                    </span>
                  </div>

                  <div>
                    <Calendar size={16} />

                    <span>
                      Last donation:{" "}
                      {donor.lastDonation}
                    </span>
                  </div>

                </div>


                {/* AVAILABILITY */}

                <div
                  className={
                    donor.available
                      ? "donor-availability available"
                      : "donor-availability unavailable"
                  }
                >

                  <CheckCircle size={15} />

                  {donor.available
                    ? "Available for donation"
                    : "Currently unavailable"}

                </div>


                {/* CONTACT */}

                <button
                  className="contact-donor"
                  onClick={() =>
                    alert(
                      `Contacting ${donor.name} at ${donor.phone}`
                    )
                  }
                >
                  <Phone size={16} />
                  Contact Donor
                </button>

              </div>

            ))

          ) : (

            <div className="donor-no-results">

              <Users size={45} />

              <h3>
                No donors found
              </h3>

              <p>
                Try another name, location or blood group.
              </p>

            </div>

          )}

        </div>

      </section>

    </div>
  );
}

export default Donors;