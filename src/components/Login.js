import React from "react";
import { Box, TextField, Button } from "@mui/material";
import GoogleButton from "react-google-button";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  let AfterLogin = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function validateForm() {
    return (email.length > 0 || phone.length >= 10) && password.length >= 8;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Box
        p={3}
        className="fssl02"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <div className="loginrightsub">
          <h1>Easy Twogether</h1>
          <p style={{ marginBottom: "11px", fontFamily: "Roboto" }}>
            Welcome to EasyTwogether
          </p>
          <h2>Login to your account</h2>
          <div className="logindiv" onSubmit={handleSubmit}>
            <div className="textfeilddiv">
              <TextField
                variant="outlined"
                type="email"
                label="Enter Email / Phone No."
                required
                value={email || phone}
                onChange={(e) =>
                  setEmail(e.target.value) || setPhone(e.target.value)
                }
              />
              <TextField
                variant="outlined"
                label="Enter Password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="fssl01">
              <div style={{ display: "flex" }}>
                <input type="checkbox" value="lsRememberMe" id="rememberMe" />{" "}
                <span style={{ marginLeft: "5px" }}></span>
                <label for="rememberMe">Remember me</label>
              </div>
              <div>
                <p style={{ color: "rgba(44, 82, 130, 1)", cursor: "pointer" }}>
                  Forgot Password?
                </p>
              </div>
            </div>

            <Button
              variant="contained"
              className="loginbtn"
              onClick={() => AfterLogin("./../../Welcome")}
              disabled={!validateForm()}
            >
              Login
            </Button>

            <div>
              <GoogleButton
                style={{ width: "100%", outline: "none" }}
                label="Or sign-in with google"
                type="dark"
                className="googlebtn"
                onClick={() => AfterLogin("./Welcome")}
                disabled
              />
            </div>

            <p style={{ marginTop: "20px" }}>
              Dont have an account?{" "}
              <span
                style={{ color: "rgba(44, 82, 130, 1)", cursor: "pointer" }}
                onClick={() => AfterLogin("./../Signup")}
              >
                Join free today
              </span>
            </p>
          </div>
        </div>
      </Box>
    </>
  );
};

export default Login;
