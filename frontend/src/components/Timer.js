import React, { useEffect, useState } from "react";
import Clock from "./Clock";

const Timer = () => {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, settimerHours] = useState();
  const [timerMinutes, settimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval = 0;
  const startTimer = () => {
    const countDownDate = new Date("Mars 17, 2023").getTime();
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
  return (
    <Clock
      clockDays={timerDays}
      clockHours={timerHours}
      clockMinutes={timerMinutes}
      clockSeconds={timerSeconds}
    />
  );
};

export default Timer;
