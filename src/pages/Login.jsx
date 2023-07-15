
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupPage from "../pages/Signup";
import Ticket from "./Ticket";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSignupPage, setIsSignupPage] = useState(false);
  const [isTicketPage, setIsTicketPage] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(username)) {
      setError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    // Perform login logic here
    localStorage.setItem("username", username);
    console.log("Logged in with:", username, password);

    // Reset error state
    setError("");

    // Set display to true
    setDisplay(true);

    // Navigate to another page upon successful login
    navigate("/dashboard");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password:", username);
    setForgotPassword(false);
  };

  const handleMenuClick = (menuItem) => {
    console.log("Navigating to:", menuItem);
  };

  const getTimeOfDay = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleSignupPage = () => {
    setIsSignupPage(!isSignupPage);
  };

  const toggleTicketPage = () => {
    setIsTicketPage(!isTicketPage);
  };

  if (isSignupPage) {
    return <SignupPage />;
  }

  if (isTicketPage) {
    return <Ticket />;
  }

  return (
    <div className="main">
      <div className="card">
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center",marginBottom:"18px"}}>Login</h1>
        {display && (
          <>
            <h1>
              Good {getTimeOfDay()} Rescuer! How are you doing today, {username}?
            </h1>
            <nav>
              <ul>
                <li style={{listStyle: "circle"}} onClick={toggleTicketPage}>
                  <Link to="/ticket">Tickets</Link>
                </li>
              </ul>
            </nav>
          </>
        )}

        {!display && !forgotPassword && !isSignupPage && !isTicketPage ? (
          <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleLogin}>
            <label>
              Username:
              <input
                className="in"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
                required
              />
            </label>
            <br />
            <label>
              Password:
              <input
                className="in"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <br />
            <div className="button">
              <button
                onClick={() => {
                  setDisplay(true);
                }}
                type="submit"
                style={{ border: "1px solid black", width: "60px" }}
              >
                Login
              </button>
              <button
                onClick={() => {
                  setForgotPassword(true);
                }}
              >
                Forgot Password?
              </button>
              {/* <span>
                <Link to="#" onClick={toggleSignupPage}>
                  Signup
                </Link>
              </span> */}
            </div>
          </form>
        ) : display === false ? (
          <form onSubmit={handleForgotPassword}>
            <label>
              Enter your username to reset your password:
              <input
                className="in"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <div className="button">
              <button type="submit">Reset Password</button>
              <button onClick={() => setForgotPassword(false)}>Cancel</button>
            </div>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LoginPage;

