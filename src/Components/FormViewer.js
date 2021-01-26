import React from "react";
import "./FormViewer.css";
import { datac } from "../Utils/Data";

const FormViewer = (props) => {
  return (
    <div>
      <div className="container" style={{ paddingRight: 0, paddingLeft: 0 }}>
        <div className="row">
          <div className="col">
            <div className="tr_dinvw"></div>
            <div className="tr_iodfw8">
              <div className="table-responsive">
                <table className="table table-success table-striped tr_tbjsl">
                  <thead>
                    {props.data ? (
                      <tr className="table-primary">
                        <th>Invoice ID</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>EDD</th>
                        <th>Description</th>
                        <th>Entry by</th>
                      </tr>
                    ) : null}
                  </thead>
                  <tbody>
                    {props.data ? (
                      props.data.reverse().map((res) => {
                        return (
                          <>
                            <tr className="table-info">
                              <td>{res.invoiceNumber}</td>
                              <td>{res.status}</td>
                              <td>{res.date}</td>
                              <td>{res.edd}</td>
                              <td>{res.description}</td>
                              <td>Oge</td>
                            </tr>
                          </>
                        );
                      })
                    ) : (
                      <div className=" tr_span28948r tr_jdsoe1">
                        {" "}
                        Search with your Invoice number and you Last Name
                        concaneated e.g DBB8378OLA{" "}
                      </div>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormViewer;
