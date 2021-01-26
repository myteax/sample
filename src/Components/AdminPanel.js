import React from "react";
import "./AdminPanel.css";
const AdminPanel = (props) => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-light navbar-expand-md d-xl-flex">
              <div className="container-fluid">
                <button
                  data-toggle="collapse"
                  data-target="#navcol-1"
                  className="navbar-toggler"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse d-xl-flex justify-content-center justify-content-xl-center tr_dji21"
                  id="navcol-1"
                >
                  <ul className="nav navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link active tr_linka"
                        href="#"
                        onClick={() => props.changeMenu(0)}
                      >
                        Track Order
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link active tr_linka"
                        href="#"
                        onClick={() => props.changeMenu(1)}
                      >
                        New Order
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link tr_linka"
                        href="#"
                        onClick={() => props.changeMenu(2)}
                      >
                        Update Pending Orders
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link tr_linka"
                        href="#"
                        onClick={() => props.changeMenu(3)}
                      >
                        View Completed Orders
                      </a>
                    </li>
                    <li className="nav-item"></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
