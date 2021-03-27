import React from "react";

export const LoginScreen = () => {
  return (
    <div>
      <h3>Login </h3>
      <form>
        <imput type="text" placeholder="Email" name="email" />
        <imput type="password" placeholder="Password" name="password" />
        <button type="submit"> Login </button>
        <hr/>
        Google
      </form>
    </div>
  );
};
