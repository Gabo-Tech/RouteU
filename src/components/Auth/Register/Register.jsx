import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Login/Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import { register, reset } from "../../../features/auth/authSlice";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        description: "No coinciden las contraseñas",
      });
    } else {
      dispatch(register(formData));
      notification.success({
        message: "Bien!",
        description: "Has sido registrado con exito",
      });
      setTimeout(function () {
        navigate("/login");
      }, 1000);
    }
  };
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
                  <h3 className="mb-4 text-center">Registrate</h3>
                  <form onSubmit={onSubmit} className="signin-form">
                    <div className="form-group">
                      <input
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        value={name}
                        onChange={handleChange}
                        validate={{ regexp: /^[a-z]/i }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="tu email"
                        onChange={handleChange}
                        value={email}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        id="pwd"
                        placeholder="contraseña"
                        onChange={handleChange}
                        value={password}
                        validate={{ regexp: /^([a-zA-Z0-9])/i }}
                        required
                      />
                      <span
                        toggle="#password-field"
                        className="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password2"
                        id="pwd2"
                        placeholder="repita contraseña"
                        onChange={handleChange}
                        value={password2}
                        validate={{ regexp: /^([a-zA-Z0-9])/i }}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        className="form-control btn btn-primary submit px-3"
                      >
                        Registrate
                      </button>
                    </div>
                    <div className="form-group d-md-flex"></div>
                  </form>
                  <p className="w-100 text-center">
                    &mdash;&mdash;&mdash;&nbsp;
                    <Link to="/login">O ya tienes cuenta?</Link>&nbsp;
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
};

export default Register;
