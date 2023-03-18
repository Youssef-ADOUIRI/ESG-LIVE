import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import "./Timer.css";

const Timer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, settimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval = 0;
  const startTimer = () => {
    const countDownDate = new Date("2023-03-17 10:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrence = countDownDate - now;
      const days = Math.floor(diffrence / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (diffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffrence % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((diffrence % (60 * 1000)) / 1000);
      if (diffrence < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        settimerHours(hours);
        settimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  if (timerDays || timerHours || timerMinutes || timerSeconds) {
    return (
      <Clock
        clockDays={timerDays}
        clockHours={timerHours}
        clockMinutes={timerMinutes}
        clockSeconds={timerSeconds}
      />
    );
  } else {
    return (
      <div className="timer__welcome__wrapper">
        <h1 className="timer__welcome">HAPPENING NOW</h1>
        <hr/>
      </div>
    );
  }
};

export default Timer;
