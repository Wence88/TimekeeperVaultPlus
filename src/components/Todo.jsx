import React, { useState } from "react";

const Todo = ({ todo }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleIsOpened = (id) => {
    if (id === todo?._id) {
      setIsOpened(!isOpened);
    }
  };

  return (
    <div className="task_item">
      <div className="task" onClick={() => handleIsOpened(todo?._id)}>
        <div className="row">
          <input type="checkbox" />
          <p>{todo?.title}</p>
        </div>

        <span className="material-symbols-outlined icon">
          arrow_forward_ios
        </span>
      </div>

      {isOpened && <div className="task_desc">{todo?.desc}</div>}
    </div>
  );
};

export default Todo;
