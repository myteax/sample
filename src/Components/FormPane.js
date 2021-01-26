import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./FormPane.css";
import FormViewer from "./FormViewer";

const FormPane = () => {
  const [ddt, setddt] = useState();
  const [search, setsearch] = useState("");

  const changeHandler = (e) => {
    let value = e.target.value;
    setsearch(value.toLowerCase());
  };

  useEffect(() => {}, []);

  const submitHandler = (e) => {
    e.preventDefault();
    fextData();
  };

  const fextData = async () => {
    await Axios.post(`${process.env.REACT_APP_SERVER}/searchorder`, {
      orderId: search,
    })
      .then((res) => {
        if (res) {
          setddt(res.data.data);
        }
      })
      .catch((err) => {
        if (err) {
        }
      });
  };
  return (
    <div>
      <div className="container cn_ejij2" style={{ background: "f5f5f5" }}>
        <div className="row">
          <div className="col">
            <header>
              <p className="p_irnoviw">Track your Order</p>
            </header>
          </div>
        </div>
        <div className="row">
          <div className="col ">
            <div className="tr_jdjs23">
              <form onSubmit={submitHandler}>
                <div className="form-group text-center d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center align-items-center tr_pleifo">
                  <input
                    type="text"
                    id="searchiie"
                    className="form-control tr_ino_jofi"
                    placeholder="Input your invoice number & your Last Name"
                    onChange={changeHandler}
                  />
                  <button
                    className="btn btn-primary tr_bouw"
                    type="button"
                    onClick={submitHandler}
                  >
                    Track
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FormViewer data={ddt} />
    </div>
  );
};

export default FormPane;
