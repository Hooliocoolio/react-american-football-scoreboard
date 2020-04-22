//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  const [homeScore, setHomeScore] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);
  // const [downValue, setDownValue] = useState(1);
  // const [toGoValue, setToGoValue] = useState(1);
  // const [ballOnValue, setBallOnValue] = useState(50);




  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">49ERS</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">15:00</div>
          <div className="visitors">
            <h2 className="visitors__name">RAIDERS</h2>
            <div className="visitors__score">{visitorScore}</div>
          </div>
        </div>

        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHomeScore(homeScore + 6)}> Home TD </button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeScore(homeScore + 3)}> Home FG </button>
        </div>
        <div className="visitorButtons">
          <button className="visitorButtons__touchdown" onClick={() => setVisitorScore(visitorScore + 6)}> Visitor TD </button>
          <button className="visitorButtons__fieldGoal" onClick={() => setVisitorScore(visitorScore + 3)}> Visitor FG </button>
        </div>
        {/* {/* <button className="homeButtons__fieldGoal" onClick={() => setDownValue(downValue + 1)}> Down </button>
        <button className="homeButtons__fieldGoal" onClick={() => setToGoValue(toGoValue + 1)}> To Go </button>
        <button className="homeButtons__fieldGoal" onClick={() => setBallOnValue(ballOnValue + 1)}> Ball On </button> */}
        {/* <button className="homeButtons__fieldGoal" onClick={() => setQuarterValue(quarterValue + 1)}> Quarter </button> */}
      </section>
    </div>
  );
}

export default App;
