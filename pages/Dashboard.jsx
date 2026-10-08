import {
  Droplet,
  Users,
  Hospital,
  AlertTriangle,
  TrendingUp,
  Activity,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const bloodInventory = [
  { group: "A+", units: 25 },
  { group: "A-", units: 8 },
  { group: "B+", units: 18 },
  { group: "B-", units: 6 },
  { group: "O+", units: 32 },
  { group: "O-", units: 10 },
  { group: "AB+", units: 12 },
  { group: "AB-", units: 4 },
];

const recentRequests = [
  {
    hospital: "City Care Hospital",
    group: "O+",
    units: 4,
    time: "10 min ago",
    status: "Urgent",
  },
  {
    hospital: "LifeLine Medical Center",
    group: "A+",
    units: 2,
    time: "35 min ago",
    status: "Pending",
  },
  {
    hospital: "Apollo Hospitals",
    group: "B+",
    units: 5,
    time: "1 hour ago",
    status: "Processing",
  },
  {
    hospital: "Red Cross Hospital",
    group: "AB+",
    units: 2,
    time: "2 hours ago",
    status: "Completed",
  },
];

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <section className="dashboard-header">

        <div>
          <p className="small-title">
            BLOODCARE DASHBOARD
          </p>

          <h1>
            Blood Bank
            <span> Overview</span>
          </h1>

          <p>
            Monitor blood inventory, donors, hospitals,
            and emergency requests in one place.
          </p>
        </div>

        <div className="dashboard-live">
          <Activity size={17} />
          System Live
        </div>

      </section>


      {/* STAT CARDS */}

      <section className="dashboard-content">

        <div className="stat-grid">

          <div className="stat-card">

            <div className="stat-icon red">
              <Droplet size={25} />
            </div>

            <div>
              <p>Total Blood Units</p>
              <h2>115</h2>
              <span className="positive">
                <TrendingUp size={13} />
                12% this month
              </span>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon blue">
              <Users size={25} />
            </div>

            <div>
              <p>Registered Donors</p>
              <h2>1,284</h2>
              <span className="positive">
                <TrendingUp size={13} />
                8% this month
              </span>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon purple">
              <Hospital size={25} />
            </div>

            <div>
              <p>Partner Hospitals</p>
              <h2>42</h2>
              <span className="positive">
                <ArrowUpRight size={13} />
                5 new hospitals
              </span>
            </div>

          </div>


          <div className="stat-card emergency-stat">

            <div className="stat-icon orange">
              <AlertTriangle size={25} />
            </div>

            <div>
              <p>Emergency Requests</p>
              <h2>07</h2>
              <span className="warning-text">
                Needs attention
              </span>
            </div>

          </div>

        </div>


        {/* MAIN GRID */}

        <div className="dashboard-main-grid">


          {/* BLOOD INVENTORY */}

          <div className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <p className="small-title">
                  INVENTORY
                </p>

                <h2>
                  Blood Stock
                </h2>
              </div>

              <Droplet
                size={23}
                className="panel-red-icon"
              />

            </div>


            <div className="inventory-list">

              {bloodInventory.map((blood) => {

                const percentage =
                  Math.min((blood.units / 35) * 100, 100);

                const lowStock =
                  blood.units <= 8;

                return (
                  <div
                    className="inventory-row"
                    key={blood.group}
                  >

                    <div className="blood-type">
                      {blood.group}
                    </div>

                    <div className="inventory-middle">

                      <div className="inventory-top">

                        <span>
                          {blood.units} units
                        </span>

                        {lowStock && (
                          <span className="low-stock">
                            Low Stock
                          </span>
                        )}

                      </div>

                      <div className="stock-bar">

                        <div
                          className={
                            lowStock
                              ? "stock-fill low"
                              : "stock-fill"
                          }
                          style={{
                            width: `${percentage}%`,
                          }}
                        />

                      </div>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>


          {/* QUICK ACTIONS */}

          <div className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <p className="small-title">
                  QUICK ACTIONS
                </p>

                <h2>
                  Manage System
                </h2>
              </div>

            </div>


            <div className="quick-actions">

              <a href="/find-blood">
                <Droplet size={21} />
                <div>
                  <strong>Find Blood</strong>
                  <span>Check blood availability</span>
                </div>
                <ArrowUpRight size={18} />
              </a>


              <a href="/donate">
                <Users size={21} />
                <div>
                  <strong>Register Donor</strong>
                  <span>Add a new blood donor</span>
                </div>
                <ArrowUpRight size={18} />
              </a>


              <a href="/hospitals">
                <Hospital size={21} />
                <div>
                  <strong>Hospitals</strong>
                  <span>View hospital requirements</span>
                </div>
                <ArrowUpRight size={18} />
              </a>

            </div>

          </div>

        </div>


        {/* RECENT REQUESTS */}

        <div className="dashboard-panel requests-panel">

          <div className="panel-heading">

            <div>
              <p className="small-title">
                RECENT ACTIVITY
              </p>

              <h2>
                Blood Requests
              </h2>
            </div>

            <Clock size={22} />

          </div>


          <div className="requests-table">

            <div className="request-table-header">
              <span>Hospital</span>
              <span>Blood Group</span>
              <span>Units</span>
              <span>Time</span>
              <span>Status</span>
            </div>


            {recentRequests.map((request) => (

              <div
                className="request-row"
                key={
                  request.hospital +
                  request.time
                }
              >

                <strong>
                  {request.hospital}
                </strong>

                <span className="request-blood">
                  {request.group}
                </span>

                <span>
                  {request.units}
                </span>

                <span className="request-time">
                  {request.time}
                </span>

                <span
                  className={`request-status ${request.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {request.status}
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* ALERT */}

        <div className="dashboard-alert">

          <div className="alert-icon">
            <AlertTriangle size={22} />
          </div>

          <div>

            <strong>
              Low Blood Stock Alert
            </strong>

            <p>
              A-, B-, and AB- blood groups are currently
              below the recommended stock level.
            </p>

          </div>

          <a href="/donate">
            Find Donors
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>

    </div>
  );
}

export default Dashboard;