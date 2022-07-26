import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import "./Login.scss";
// import { Navigate } from "react-router-dom";

const Login = () => {
  // const { user } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const navigate = useNavigate();
  const { isError, isSuccess, message } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  useEffect(() => {
    if (isError) {
      notification.error({ message: "Error", description: message });
    }

    if (isSuccess) {
      notification.success({ message: "Exito", description: message });

      setTimeout(() => {
        navigate("/feed");
      }, 2000);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, message]);

  return (
    <>
      <body className="img js-fullheight principal">
        <section className="ftco-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 text-center mb-5">
                <h2 className="heading-section">RouteU</h2>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4">
                <div className="login-wrap p-0">
                  <h3 className="mb-4 text-center">Tienes una cuenta?</h3>
                  <form
                    role="presentation"
                    autocomplete="off"
                    onSubmit={onSubmit}
                    className="signin-form"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={onChange}
                        className="form-control"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        id="password-field"
                        placeholder="Contraseña"
                        onChange={onChange}
                        value={password}
                        className="form-control"
                        autocomplete="off"
                        required
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Acceder
                      </button>
                    </div>
                    <div className="form-group d-md-flex"></div>
                  </form>
                  <p className="w-100 text-center">
                    &mdash;&mdash;&mdash;&nbsp;
                    <Link to="/register"> Registrate </Link>
                    &nbsp;&mdash;&mdash;&mdash;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default Login;
