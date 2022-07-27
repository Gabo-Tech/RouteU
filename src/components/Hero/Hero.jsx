import React, { useState } from "react";
import "../Feed/Feed.scss";
import { useNavigate, Link } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (e.key === "Enter") {
      navigate(`/search/${text}`);
    }
  };
  return (
    <>
      <header className="py-5 hero">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <Link to="/feed">
              <h1 className="display-4 fw-bolder animate__animated animate__fadeInDown heading-section">
                RouteU
              </h1>
            </Link>
            <p className="lead fw-normal text-white-50 mb-0 animate__animated animate__fadeInUp ">
              Tu compañero de Ruta
            </p>
          </div>
        </div>
        <div class="input-group search-bar">
          <div class="form-outline ">
            <input
              autocomplete="off"
              className="search-box form-control form-control-lg form-control-borderless"
              onKeyUp={handleChange}
              placeholder="Buscar..."
              name="text"
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Hero;
