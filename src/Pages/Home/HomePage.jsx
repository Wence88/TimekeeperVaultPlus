import React from "react";
import "./Home.css";
import HomeLeft from "../../components/HomeLeft";

const HomePage = () => {
  return (
    <div className="home">
      <HomeLeft />

      <div className="center">
        <div className="row">
          <h1>Today</h1>
          <h3>5</h3>
        </div>

        <div className="task_container">
          <div className="add_task">
            <span className="material-symbols-outlined icon">add</span>
            <p>Add New Task</p>
          </div>

          <div className="task_item">
            <div className="task">
              <div className="row">
                <input type="checkbox" />
                <p>Research content ideas</p>
              </div>

              <span className="material-symbols-outlined icon">
                arrow_forward_ios
              </span>
            </div>

            <div className="task_desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </div>
          </div>

          <div className="task_item">
            <div className="task">
              <div className="row">
                <input type="checkbox" />
                <p>Research content ideas</p>
              </div>

              <span className="material-symbols-outlined icon">
                arrow_forward_ios
              </span>
            </div>
          </div>

          <div className="task_item">
            <div className="task">
              <div className="row">
                <input type="checkbox" />
                <p>Research content ideas</p>
              </div>

              <span className="material-symbols-outlined icon">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="right">right</div>
    </div>
  );
};

export default HomePage;
