import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://conceptodefinicion.de/wp-content/uploads/2014/05/imagen.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Un nuevo día</p>
        <p className="journal__entry-content">
          Aute aliqua esse tempor ea ut consectetur qui anim.
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>24</h4>
      </div>
    </div>
  );
};
