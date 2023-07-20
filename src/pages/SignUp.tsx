import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { base_url } from "../api";
import { StyledInput } from "../components/StyledInput";



const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const moveToLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = '/';
  }

  const signUpClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log({username: {username}, password: {password}});
    try {
      const response = await axios.post(base_url + '/auth/signup',{
        "username": username,
        "password": password
      });

      console.log(response);
      // window.location.href = '/boardlist';
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      <h1 style={{ color: "#E5EAF5", textAlign: "center"}}>Sign up</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Username
        <StyledInput type="text" placeholder="username" onChange={usernameChange} value={username} />
        Password
        <StyledInput type='text' placeholder='password' onChange={passwordChange} value={password} />
        <div style={{ marginTop: "40px" }}>
          <Button
            title="Cancel"
            onClick={moveToLogin}/>
          <Button
            title="Sign up"
            onClick={signUpClick}/>
        </div>
      </div>
    </>
  );
}

export default SignUp;