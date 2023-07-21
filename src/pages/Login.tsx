import React, { ReactEventHandler, useState } from "react";
import { StyledButton } from "../components/StyledButton";
import axios from "axios";
import { base_url } from "../api";
import { StyledInput } from "../components/StyledInput";
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  const passwordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const moveToSignUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.location.href = '/signup';
  }

  const loginClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log({username: {username}, password: {password}});
    try {
      const response = await axios.post(base_url + '/auth/signin', {
        username: username,
        password: password,
      });
      console.log(response.data);
      if (response.data?.accessToken) {
        alert('access token', response.data.accessToken);
        Cookies.set('accessToken', response.data.accessToken, {expires: 7});
        window.location.href = '/boards';
      } else {
        alert ('no token');
        return ;
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <h1 style={{ color: "#E5EAF5" }}>Jeongkpa Board</h1>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        Username
        <StyledInput type="text" placeholder="username" onChange={usernameChange} value={username} />
        Password
        <StyledInput type='text' placeholder='password' onChange={passwordChange} value={password} />
        <div style={{ marginTop: "40px" }}>
          <StyledButton onClick={moveToSignUp}>Sign up</StyledButton>
          <StyledButton onClick={loginClick}>Log in</StyledButton>
        </div>
      </div>
    </>
  );
}

export default Login;