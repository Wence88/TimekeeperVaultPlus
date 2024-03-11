import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeLeft from "../../components/HomeLeft";
import HomeCenter from "../../components/HomeCenter";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API_URL = "http://localhost:8000";

const HomePage = () => {
  const location = useLocation();

  const path = new URLSearchParams(location.search);

  const id = path.get("id");

  const [isTask, setIsTask] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos, setTodos] = useState([]);

  const createTodo = async (e) => {
    e.preventDefault();

    const input = {
      title,
      desc,
      user: id,
    };

    try {
      const res = await axios.post(`${API_URL}/todo/create`, input);

      alert(res.data);

      res.data && window.location.reload();
    } catch (error) {}
  };

  const fetchTodo = async () => {
    try {
      const res = await axios.get(`${API_URL}/todo/${id}`);

      setTodos(res.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="home">
      <HomeLeft todos={todos} />

      <HomeCenter setIsTask={setIsTask} todos={todos} id={id} />

      {isTask && (
        <div className="right">
          <div className="row">
            <h3>Task</h3>
          </div>

          <div className="inputContainer">
            <form onSubmit={createTodo}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <input
                type="text"
                name="desc"
                placeholder="Description"
                onChange={(e) => setDesc(e.target.value)}
                required
              />

              <div className="row">
                <button onClick={() => setIsTask(false)}>Close</button>
                <button type="submit">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
