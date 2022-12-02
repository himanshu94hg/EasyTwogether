import React from "react";
import pic from "./img/banner.svg";
import signupimg from "./img/signupimg.svg";
import "./Signup.css";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  let afterSignup = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  function validateForm() {
    return (email.length > 0 || phone.length >= 10) && password.length >= 8;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <div className="loginBackground">
        <div className="fsss01">
          <img src={pic} alt="" className="content_961" />
        </div>

        <div className="fsss02">
          <Box
            p={3}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div className="fsss02sub">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "4%",
                }}
              >
                <img style={{ width: "25%" }} src={signupimg} alt="" />
              </div>
              <div className="logindiv" onSubmit={handleSubmit}>
                <div className="fsss03">
                  <TextField
                    variant="outlined"
                    type="email"
                    label="Enter Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="Enter Mobile No."
                    type="mobile number"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="Enter Full Name"
                    type="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="Enter Username"
                    type="name"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="Enter Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <TextField
                    variant="outlined"
                    label="Re-Enter Password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  variant="contained"
                  className="loginbtn content_961"
                  onClick={() => afterSignup("/")}
                  disabled={!validateForm()}
                >
                  Sign Up
                </Button>

                <Button
                  variant="contained"
                  className="loginbtn content_960"
                  onClick={() => afterSignup("./../Login")}
                  disabled={!validateForm()}
                >
                  Sign Up
                </Button>

                <p style={{ marginTop: "20px" }} className="content_961">
                  Do you already have an account?{" "}
                  <span
                    style={{ color: "rgba(44, 82, 130, 1)", cursor: "pointer" }}
                    onClick={() => afterSignup("/")}
                  >
                    Login
                  </span>
                </p>

                <p style={{ marginTop: "20px" }} className="content_960">
                  Do you already have an account?{" "}
                  <span
                    style={{ color: "rgba(44, 82, 130, 1)", cursor: "pointer" }}
                    onClick={() => afterSignup("./../Login")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Home;
