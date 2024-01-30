import React from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "./Login/LoginPage";

function Home() {
  const navigate = useNavigate();

  // const onClickLoginHandler = () => {
  //   navigate("/login");
  // };
  // const onClickSignupHandler = () => {
  //   navigate("/signup");
  // };

  return (
    <div className="text-center text-2xl">
      {/* {!localStorage.getItem("Token") ? navigate("/") : navigate("/books")} */}
      {/* <h1>This is Home Page</h1>
      <button className="border m-2 p-2" onClick={onClickLoginHandler}>
        Login
      </button>
      <button className="border m-2 p-2" onClick={onClickSignupHandler}>
        Signup
      </button> */}
      <LoginPage />
    </div>
  );
}

export default Home;
