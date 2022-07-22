import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import { notification } from "antd";
import { register, reset } from "../../../features/authSlice";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;

  const dispatch = useDispatch();

  const { isSuccess, message, isError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isSuccess) {
      notification.success({
        message: "Success",

        description: message,
      });
    }

    if (isError) {
      notification.error({ message: "Error", description: message });
    }
    dispatch(reset());
  }, [isSuccess, isError, message]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      return notification.error({
        message: "Error",
        description: "Passwords do not match",
      });
    } else {
      dispatch(register(formData));
      // notification.success({
      //   message: "Success",
      //   description: "You have successfully registered",
      // });
    }
  };
  return (
    <>
      <body class="img js-fullheight principal">
        <section class="ftco-section">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-6 text-center mb-5">
                <h2 class="heading-section">RuteU</h2>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-6 col-lg-4">
                <div class="login-wrap p-0">
                  <h3 class="mb-4 text-center">Registrate</h3>
                  <form onSubmit={onSubmit} class="signin-form">
                    <div class="form-group">
                      <input
                        name="username"
                        type="text"
                        class="form-control"
                        placeholder="Nombre de usuario"
                        value={username}
                        onChange={handleChange}
                        validate={{ regexp: /^[a-z]/i }}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        id="password-field"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        validate={{ regexp: /^([a-zA-Z0-9])/i }}
                        required
                      />
                      <span
                        toggle="#password-field"
                        class="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        class="form-control"
                        placeholder="Confirm Password"
                        validate={{ regexp: /^([a-zA-Z0-9])/i }}
                        onChange={handleChange}
                        value={password2}
                        required
                      />
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary submit px-3"
                      >
                        Register
                      </button>
                    </div>
                    <div class="form-group d-md-flex"></div>
                  </form>
                  <p class="w-100 text-center">
                    &mdash;&mdash;&mdash;&nbsp;
                    <Link to="/login">O haz Login</Link>&nbsp;
                    &mdash;&mdash;&mdash;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Register;
