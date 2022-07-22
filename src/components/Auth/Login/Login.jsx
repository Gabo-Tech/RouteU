import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

function Login() {
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
                  <h3 class="mb-4 text-center">Tienes una cuenta?</h3>
                  <form action="#" class="signin-form">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <input
                        id="password-field"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        required
                      />
                      <span
                        toggle="#password-field"
                        class="fa fa-fw fa-eye field-icon toggle-password"
                      ></span>
                    </div>
                    <div class="form-group">
                      <button
                        type="submit"
                        class="form-control btn btn-primary submit px-3"
                      >
                        Sign In
                      </button>
                    </div>
                    <div class="form-group d-md-flex"></div>
                  </form>
                  <p class="w-100 text-center">
                    &mdash;&mdash;&mdash;&nbsp;
                    <Link to="/register"> O Registrate </Link>
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
}

export default Login;
