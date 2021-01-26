import React from "react";

const CompletedOrders = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="tr_djslie2">VIEW COMPLETED ORDERS</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col">
                <div className="tr_dinvw"></div>
                <div className="tr_iodfw8">
                  <div className="table-responsive">
                    <table className="table table-success table-striped">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>Last Name</th>
                          <th>Status</th>
                          <th>Duration</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cell 1</td>
                          <td>Cell 2</td>
                          <td>Cell 3</td>
                          <td>Cell 3</td>
                        </tr>
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

export default CompletedOrders;
