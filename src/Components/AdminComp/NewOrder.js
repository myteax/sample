import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./NewOrder.css";
const NewOrder = () => {
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [lname, setlname] = useState("");
  const [status, setstatus] = useState("Ordering");
  const [edd, setedd] = useState("");
  const [email, setemail] = useState("");
  const [description, setdesription] = useState("");
  const [resst, setresst] = useState("");
  const [resmsg, setresmsg] = useState("");
  const [err, seterr] = useState(false);
  const [errmsg, seterrmsg] = useState("");

  const changeHandler = (e) => {
    let id = e.target.id;
    let value = e.target.value;
    switch (id) {
      case "invoiceNumber":
        setinvoiceNumber(value);
        break;
      case "lname":
        setlname(value);
        break;
      case "status":
        setstatus(value);
        break;
      case "edd":
        setedd(value);
        break;
      case "email":
        setemail(value);
        break;
      case "description":
        setdesription(value);
        break;
      case "ordering":
        setstatus("Ordering");
        break;
      case "production":
        setstatus("Production");
        break;
      case "shippingstore":
        setstatus("Shipped to Store");
        break;
      case "shippingcustomer":
        setstatus("Shipped to Customer");
        break;
      case "pickedup":
        setstatus("Picked Up");
        break;
      case "delivered":
        setstatus("Delivered");
        break;
      default:
        break;
    }
  };

  const resett = () => {
    setinvoiceNumber("");
    setlname("");
    setedd("");
    setstatus("Ordering");
    setemail("");
    setdesription("");
  };

  const checkValues = () => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
      var date_regex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
      let isValidDate = Date.parse("01/29/1980");
      if (date_regex.test(edd)) {
        postdata();
      } else {
        seterr(true);
        seterrmsg("Error with EDD, check and correct it");
      }
    } else {
      seterr(true);
      seterrmsg("Error with Email, check and correct it");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    checkValues();
  };

  const postdata = async () => {
    seterr(false);
    let values = {
      orderId: invoiceNumber + lname,
      invoiceNumber: invoiceNumber,
      lname: lname,
      status: status,
      edd: edd,
      email: email,
      description: description,
    };

    Axios.post(`${process.env.REACT_APP_SERVER}/postnew`, values).then(
      (res) => {
        if (res.data.status === 200) {
          setresst(res.data.status);
          setresmsg(res.data.msg);
          resett();
        } else {
          setresst(res.data.status);
          setresmsg(res.data.msg);
        }
      }
    );
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tr_djslie2">NEW ORDER FORM</div>
          </div>
        </div>
        {resst === 200 ? (
          <div className="tr_span28948r tr_jdsoe1"> {resmsg} </div>
        ) : null}
        {resst === 400 ? (
          <div className="tr_span28948r tr_jdsoe2"> {resmsg} </div>
        ) : null}
        {err === true ? (
          <div className="tr_span28948r tr_jdsoe2"> {errmsg}</div>
        ) : null}
        <div className="row">
          <div className="col tr_djwo43">
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <div className="d-lg-flex d-xl-flex tr_divjw3">
                  <div className="d-md-flex d-lg-flex d-xl-flex tr_divsize">
                    <label>Invoice Number: </label>
                    <input
                      type="text"
                      className="form-control tr_inp323"
                      id="invoiceNumber"
                      value={invoiceNumber}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="d-md-flex d-lg-flex d-xl-flex tr_divsize">
                    <label>Last Name: </label>
                    <input
                      type="text"
                      className="form-control tr_inp323 tr_fjow"
                      id="lname"
                      value={lname}
                      onChange={changeHandler}
                    />
                  </div>

                  <div className="d-flex justify-content-center justify-content-xl-center tr_divsize tr_jwe">
                    <div className="dropdown">
                      <button
                        className="btn btn-success dropdown-toggle tr_divwiw"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        type="button"
                      >
                        {status}
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          id="ordering"
                          onClick={changeHandler}
                        >
                          Ordering
                        </a>
                        <a
                          className="dropdown-item"
                          id="production"
                          onClick={changeHandler}
                        >
                          Production
                        </a>
                        <a
                          className="dropdown-item"
                          id="shippingstore"
                          onClick={changeHandler}
                        >
                          Shipping to Store
                        </a>
                        <a
                          className="dropdown-item"
                          id="shippingcustomer"
                          onClick={changeHandler}
                        >
                          Shipped to Customer
                        </a>
                        <a
                          className="dropdown-item"
                          id="pickedup"
                          onClick={changeHandler}
                        >
                          Picked up
                        </a>
                        <a
                          className="dropdown-item"
                          id="delivered"
                          onClick={changeHandler}
                        >
                          Delivered
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tr_divsize tr_jwe">
                    <div className="d-flex tr_divsize">
                      <label>EDD: </label>
                      <input
                        type="text"
                        className="form-control tr_inp323"
                        id="edd"
                        value={edd}
                        onChange={changeHandler}
                      />
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      {" "}
                      <span className="tr_span28948r"> (dd/mm/yyyy)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-md-flex d-lg-flex d-xl-flex tr_divsize tr_emailal">
                    <label>Email: </label>
                    <input
                      type="text"
                      className="form-control tr_inp323"
                      id="email"
                      value={email}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <div className="d-sm-flex d-md-flex d-lg-flex d-xl-flex tr_divjw3">
                  <div className="tr_divsize tr_ssi3i">
                    <label>Description: </label>
                    <textarea
                      className="form-control tr_joer84"
                      style={{ width: "100%" }}
                      id="description"
                      value={description}
                      onChange={changeHandler}
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center justify-content-xl-center tr_div_brn">
                  <button className="btn btn-success tr_btn423" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default NewOrder;
