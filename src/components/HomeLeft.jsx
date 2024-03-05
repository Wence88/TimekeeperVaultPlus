import React from "react";

const HomeLeft = () => {
  return (
    <div className="left">
      <div className="row">
        <h3>Menu</h3>

        <span className="material-symbols-outlined icon">menu</span>
      </div>

      <div className="column">
        <div className="row">
          <span className="material-symbols-outlined icon">search</span>
          <p>search</p>
        </div>

        <h4>Tasks</h4>

        <div className="row row-space">
          <div className="row">
            <span className="material-symbols-outlined list_icon">
              double_arrow
            </span>

            <p>Upcoming</p>
          </div>

          <p>12</p>
        </div>

        <div className="row row-space">
          <div className="row">
            <span className="material-symbols-outlined list_icon">
              calendar_today
            </span>

            <p>Today</p>
          </div>

          <p>5</p>
        </div>

        <div className="row">
          <span className="material-symbols-outlined list_icon">
            calendar_month
          </span>

          <p>Calendar</p>
        </div>

        <div className="row">
          <span className="material-symbols-outlined list_icon">
            sticky_note_2
          </span>

          <p>Sticky Wall</p>
        </div>

        <h4>Lists</h4>

        <div className="row row-space">
          <div className="row">
            <div className="box" style={{ backgroundColor: "red" }}></div>

            <p>Personal</p>
          </div>

          <p>3</p>
        </div>

        <div className="row row-space">
          <div className="row">
            <div
              className="box"
              style={{ backgroundColor: "greenyellow" }}
            ></div>

            <p>Work</p>
          </div>

          <p>3</p>
        </div>

        <div className="row row-space">
          <div className="row">
            <div className="box" style={{ backgroundColor: "yellow" }}></div>

            <p>List 1</p>
          </div>

          <p>3</p>
        </div>

        <h4>Tags</h4>
        <div className="row">
          <div className="tag" style={{ backgroundColor: "skyblue" }}>
            Tag 1
          </div>
          <div className="tag" style={{ backgroundColor: "hotpink" }}>
            Tag 2
          </div>
          <div className="tag" style={{ backgroundColor: "gray" }}>
            Tag 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
