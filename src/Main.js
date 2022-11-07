import React, { useState } from "react";
import MusicIcon from "./asset/icon-music.svg";

const Main = () => {
  const [plan, setYearplan] = useState({
    year: "Annual Year",
    amount: 59.99,
  }
  );
  function handleClick() {
    if (plan.year === "Annual Year" && plan.amount === 59.99) {
      setYearplan({ year: "Monthly" , amount: 4.99 });
    } else {
      setYearplan({ year: "Annual Year" , amount: 59.99 });
    
    }

  }
  return (
    <div className="Main-container">
      <h2 className="Order-container">Order Summary</h2>
      <p className="Text-container">
        You can now listen to millions of <br /> songs, audiobooks, and podcasts
        on <br /> any device anywhere you like!
      </p>
      <section className="music-cont">
        <img src={MusicIcon} className="music-icon" alt="music-icon" />
        <div>
          {" "}
          <h5>{plan.year} </h5>
          <p>{plan.amount}</p>
        </div>
        <span className="change" onClick={handleClick}>
          Change
        </span>
      </section>
      
    </div>
  );
};

export default Main;
