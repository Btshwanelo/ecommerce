import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { Link, Redirect } from "react-router-dom";
import { loginUser, cleanErrorMessage } from "../State/actions";
import { connect } from "react-redux";

const Login = ({ loginUser, users, cleanErrorMessage }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  if (users?.session?.name) {
    return <Redirect to="/" />;
  }

  const handleLogin = (form) => {
    if (form.email === "" || form.password === "") {
      Swal.fire({
        text: "One or more field is empty",
        icon: "error",
        width: "300px",
      });
      return;
    } else if (users?.message !== "") {
      Swal.fire({
        text: `${users?.message}`,
        icon: "error",
        width: "300px",
      });

      cleanErrorMessage();
      return;
    }
    loginUser(form);
  };
  return (
    <div className="form">
      <Navbar />
      <div className="login">
        <div className="login__form">
          <h3>Login</h3>
          <label for="username">Username</label>
          <input
            type="email"
            placeholder="Email or Phone"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            id="username"
          />

          <label for="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button onClick={() => handleLogin(form)}>Log In</button>
        </div>
        <p>
          Dont have an account ? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, cart }) => {
  return {
    cart,
    users,
  };
};

const mapDispatchToProps = () => {
  return {
    loginUser,
    cleanErrorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Login);
