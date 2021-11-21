import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { registerUser, cleanErrorMessage } from "../State/actions";

const Register = ({ registerUser, users, cleanErrorMessage }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleRegisterUser = (form) => {
    if (form.email === "" || form.password === "") {
      Swal.fire({
        text: "All fields have be to correctly filled",
        icon: "error",
        width: "300px",
      });
      return;
    } else if (users.message !== "") {
      Swal.fire({
        text: `${users.message}`,
        icon: "error",
        width: "300px",
      });
      cleanErrorMessage();
      return;
    } else registerUser(form);
    Swal.fire({
      text: "User registered",
      icon: "success",
      width: "300px",
    });
    setForm({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="form">
      <Navbar />
      <div className="login">
        <div className="login__form">
          <h3>Sign In</h3>
          <label>Username</label>
          <input
            type="email"
            placeholder="Email or Phone"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button onClick={() => handleRegisterUser(form)}>Sign Up</button>
        </div>
        <p>
          Already have an account ? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

Register.propTypes = {
  users: PropTypes.object,
  registerUser: PropTypes.func,
  cleanErrorMessage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    users: state.users,
  };
};

const mapDispatchToProps = () => {
  return {
    registerUser,
    cleanErrorMessage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Register);
