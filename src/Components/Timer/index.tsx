/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState, useEffect } from "react";
import "./timer.scss";

function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="gradient-background">
      <div className="announcement-banner">
        <div className="diqqat">
          <p>
            <span>DIQQAT!</span> <span>DIQQAT!</span> <span>DIQQAT!</span>
          </p>
        </div>
      </div>
      <div className="content">
        <h1>PROTEZ soch uchun</h1>
        <h2>30% chegirma e’lon qilaman 🏴‍☠️🏴‍☠️🏴‍☠️</h2>
        <p>
          Chegirma dastlabki <span className="highlight">50</span> ta mijoz
          uchun amal qiladi.
        </p>
        <p>Chegirmadagi joylar soni kam qolgan shoshiling</p>
        <div className="timer">
          <span>
            {currentTime.getHours() + ":"}
            {Number(currentTime.getMinutes()) > 10
              ? currentTime.getMinutes()
              : "0" + currentTime.getMinutes()}
            :
            {Number(currentTime.getSeconds()) > 10
              ? currentTime.getSeconds()
              : "0" + currentTime.getSeconds()}
          </span>
        </div>
      </div>
      <div className="announcement-banner second-banner">
        <div className="diqqat">
          <p>
            <span>CHEGIRMA!</span> <span>CHEGIRMA!</span> <span>CHEGIRMA!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timer;
