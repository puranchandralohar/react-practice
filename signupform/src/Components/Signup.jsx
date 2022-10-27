import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Signup.css";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState();
  const [psw, setPsw] = useState();
  const [confirmPsw, setConfirmPsw] = useState();
  const [isSignup, setIsSignup] = useState(false);





  return (
    <>
    {isSignup? <div>Hello {name}</div>:""}
      <form className="form_wrapper" onSubmit={userSignup}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Mobile"
          variant="outlined"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          value={psw}
          onChange={(e) => setPsw(e.target.value)}
        />
        <TextField
          type="password"
          label="Confirm Password"
          variant="outlined"
          value={confirmPsw}
          onChange={(e) => setConfirmPsw(e.target.value)}
        />
        <Button variant="contained">Sign Up</Button>
      </form>
      
    </>
  );
}
