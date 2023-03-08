import React from "react";
import { Fragment } from "react";
import "./Clock.css";
import Divider from "@mui/material/Divider";

const Clock = ({ clockDays, clockHours, clockMinutes, clockSeconds }) => {
  return (
    <Fragment>
      <section className="clock-container container">
        <section className="clock d-flex justify-content-between">
          <div className="clock__days clock__element">
            <p>{clockDays}</p>
            <small>DAYS</small>
          </div>
          <Divider orientation="vertical" />

          <div className="clock__hours clock__element">
            <p>{clockHours}</p>
            <small>HOURS</small>
          </div>
          <Divider orientation="vertical" sx={{ my: 1 }} />

          <div className="clock__minutes clock__element">
            <p>{clockMinutes}</p>
            <small>MINUTES</small>
          </div>
          <Divider orientation="vertical" />
          <div className="clock__seconds clock__element">
            <p>{clockSeconds}</p>
            <small>SECONDS</small>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  clockDays: 0,
  clockHours: 0,
  clockMinutes: 0,
  clockSeconds: 0,
};

export default Clock;
