import "./App.css";
import { useState, useEffect } from "react";
import CompletedOrders from "./Components/AdminComp/CompletedOrders";
import NewOrder from "./Components/AdminComp/NewOrder";
import UpdateOrders from "./Components/AdminComp/UpdateOrders";
import AdminPanel from "./Components/AdminPanel";
import FormPane from "./Components/FormPane";
import FormViewer from "./Components/FormViewer";

function App() {
  const [num, setnum] = useState(0);

  useEffect(() => {
    console.log("loaded o");
  }, []);

  const ssnum = (x) => {
    setnum(x);
  };

  return (
    <div className="App">
      <AdminPanel changeMenu={ssnum} />
      {num === 0 && <FormPane />}

      {num === 1 && <NewOrder />}
      {num === 2 && <UpdateOrders />}
      {num === 3 && <CompletedOrders />}

      {/*  */}
      {/*  */}
      {/* */}
    </div>
  );
}

export default App;
