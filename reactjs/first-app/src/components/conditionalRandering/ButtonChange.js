import React, { useState } from "react";
const LoginPage = () => {
  return (
    <>
      <h1>Please Login for More Information</h1>
    </>
  );
};
function LogoutPage() {
  return (
    <>
      <h1>Thank you for Support click on logout btn for Home page</h1>
    </>
  );
}
const ButtonChange = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = () => {
    setIsLogin(!isLogin);
    console.log(isLogin);
  };
  return (
    <>
      <button onClick={() => handleLogin()}>
        {isLogin ? "Login" : "Logout"}
      </button>
      {isLogin ? <LoginPage /> : <LogoutPage />}
    </>
  );
};

export default ButtonChange;
