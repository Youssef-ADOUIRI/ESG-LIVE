import React, { useState } from "react";
import Clock from "./Clock";

const Timer = () => {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, settimerHours] = useState(0);
  const [timerMinutes, settimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

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
