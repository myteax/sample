import React, { useState, useEffect } from "react";
import Axios from "axios";
import EditOrders from "./EditOrders";
import "./UpdateOrders.css";

const UpdateOrders = (props) => {
  const [dd, setdd] = useState([{}]);
  const [enableedit, setenableedit] = useState(false);
  const [editv, seteditv] = useState("");
  const [ref, setref] = useState(false);
  const [searchx, setsearchx] = useState("");

  useEffect(() => {
    fetchData();
  }, [ref]);

  const refreshx = () => {
    setref(!ref);
  };

  const fetchData = async () => {
    await Axios.get(`${process.env.REACT_APP_SERVER}/getpendingorders`)
      .then((res) => {
        if (res) {
          setdd(res.data.data);
        }
      })
      .catch((e) => {
        if (e) {
          console.log(e);
        }
      });
  };

  const editMe = (x) => {
    setenableedit(true);
    seteditv(x);
  };

  const closeMe = () => {
    setenableedit(false);
    setref(!ref);
  };

  const changeHandler = (e) => {
    let value = e.target.value;
    setsearchx(value.toUpperCase());
  };

  const submitHandler = (e) => {
    e.preventDefault();

    searchy();
  };

  const searchy = async () => {
    await Axios.post(`${process.env.REACT_APP_SERVER}/searchporder`, {
      invoiceNumber: searchx,
    }).then((res) => {
      if (res) {
        setdd(res.data.data);
      }
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tr_djslie2">UPDATE PENDING ORDERS </div>
          </div>
        </div>
        {enableedit && (
          <EditOrders data={editv} close={closeMe} refreshx={refreshx} />
        )}
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col d-xl-flex justify-content-xl-center tr_mid34">
                <div className="d-xl-flex tr_uryfi">
                  <form onSubmit={submitHandler}>
                    <div className="form-group text-center d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center tr_pleifo">
                      <input
                        type="text"
                        className="form-control tr_ino_jofi"
                        placeholder="Input invoice number"
                        id="sdjiwe"
                        onChange={changeHandler}
                      />
                      <button
                        className="btn btn-primary tr_bouw"
                        type="button"
                        onClick={submitHandler}
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="tr_dinvw tr_eowi992 ">
                  {" "}
                  {enableedit && (
                    <div className="tr_span28948r tr_jdsoe2 ">
                      {" "}
                      Table will automatically refresh once you close the update
                      module{" "}
                    </div>
                  )}
                </div>
                <div className="tr_iodfw8">
                  <div className="table-responsive">
                    <table className="table table-success table-striped tr_tbjsl">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Last Name</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dd.length > 0 ? (
                          dd.map((res) => {
                            return (
                              <tr>
                                <td>{res.invoiceNumber}</td>
                                <td>{res.lname}</td>
                                <td>{res.status}</td>
                                <td>
                                  <button
                                    className="btn btn-success tr_tbjsl tr_breow9"
                                    onClick={() => editMe(res.invoiceNumber)}
                                  >
                                    {" "}
                                    Add New Update
                                  </button>
                                  {"   "}{" "}
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <div> No data</div>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrders;
