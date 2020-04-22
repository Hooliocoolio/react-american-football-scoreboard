import React, { useState } from "react";
import "./App.css";



// const [downValue] = useState(1);
// const [toGoValue] = useState(1);
// const [ballOnValue] = useState(1);
// const [quarterValue, setQuarterValue] = useState(1);




const BottomRow = () => {
  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">1</div>

      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">4</div>

      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball On</h3>
        <div className="ballOn__value">45</div>

      </div>
      <div className="quarter">
        <h3 className="quarter__title">QTR</h3>
        <div className="quarter__value">1</div>
      </div>
    </div>
  );
};

export default BottomRow;
