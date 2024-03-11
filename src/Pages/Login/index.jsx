import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const API_URL = "http://localhost:8000";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuthContext();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleName = (e) => setName(e.target.value);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestBody = { email, password, name };

      const res = await axios.post(`${API_URL}/user/login`, requestBody);
      navigate(`/?id=${res.data?._id}`);
      // storeToken(res.data)

      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }

    // axios
    //   .post(`${API_URL}/user/login`, requestBody)
    //   .then((response) => {
    //     console.log("JWT token", response.data.authToken);
    //     console.log(response.data)
    //     storeToken(response.data.authToken);
    //     authenticateUser();
    //     navigate("/");
    //   })
    //   .catch((error) => {
    //     const errorDescription = error.response.data.message;
    //     setErrorMessage(errorDescription);
    //   });
  };

  return (
    <div className="LoginPage">
      <h1>Login</h1>

      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Name:</label>
        <input type="name" name="name" value={name} onChange={handleName} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Do not have an account yet?</p>
      <Link to={"/register"}>Sign Up</Link>
    </div>
  );
}
