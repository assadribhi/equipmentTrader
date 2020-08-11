// React
import React, { useState } from "react";

// Stores
import authStore from "../../stores/authStore";

// Style
import { CreateButtonStyled } from "../../styles";

const SignIn = () => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
  };

  return (
    <div>
      <h3>Sign Up Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>User Name</label>
          <input
            className="form-control"
            type="text"
            required="required"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>

        <div className="col-6">
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            required="required"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>

        <CreateButtonStyled className="btn float-right">
          Sign In
        </CreateButtonStyled>
      </form>
    </div>
  );
};

export default SignIn;
