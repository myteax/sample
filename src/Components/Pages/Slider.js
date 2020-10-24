import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = () => {
  const [btnn, setBtnn] = useState(2);

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 3000);
    if (btnn >= 1 && btnn < 3) {
      setBtnn(btnn + 1);
    } else if (btnn === 3) {
      setBtnn(1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [time]);

  const goback = () => {
    if (btnn > 1) {
      let x = btnn - 1;
      console.log(x);
      setBtnn(x);
    } else {
      setBtnn(btnn);
    }
  };

  const goFront = () => {
    if (btnn !== 3) {
      setBtnn(btnn + 1);
    } else {
      setBtnn(btnn);
    }
  };

  const getimg = (gg) => {
    setBtnn(gg);
  };

  return (
    <div className="img_slide">
      <div className="stack_img">
        <button className="bttn" onClick={goback}>
          {" "}
          {"<"}{" "}
        </button>
        <div className="kk">
          <img
            className={btnn === 1 ? "imgs zi" : "hd"}
            src=" https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=" "
          />
          <img
            className={btnn === 2 ? "imgs2 zi" : "hd"}
            src=" https://images.pexels.com/photos/2931062/pexels-photo-2931062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=" "
          />
          <img
            className={btnn === 3 ? "img_rest zi" : "hd2"}
            src=" https://images.pexels.com/photos/4149027/pexels-photo-4149027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=" "
          />
        </div>
        <button className="bttn" onClick={goFront}>
          {" "}
          {">"}{" "}
        </button>
      </div>
      <div className="ggt">
        <div className="fab">
          <button
            className={btnn === 1 ? " bttn2 selected" : "bttn2"}
            onClick={() => setBtnn(1)}
          >
            {" "}
            {"O"}{" "}
          </button>
          <button
            className={btnn === 2 ? " bttn2 selected" : "bttn2"}
            onClick={() => setBtnn(2)}
          >
            {" "}
            {"O"}{" "}
          </button>
          <button
            className={btnn === 3 ? " bttn2 selected" : "bttn2"}
            onClick={() => setBtnn(3)}
          >
            {" "}
            {"O"}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
