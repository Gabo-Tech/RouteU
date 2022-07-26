import { Rate } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { like, dislike, rate } from "./../../../../features/routes/routesSlice";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { relativeTimeRounding } from "moment";
import axios from "axios";
import { useTimeout } from "../../../../hooks/useTimeout";
import { BackTop } from "antd";

const Route = () => {
  const { user } = useSelector((state) => state.auth);
  const { routes } = useSelector((state) => state.routes);
  // const { avgRate} = useSelector((state) => state.avgRate);
  // console.log(avgRate)
  const dispatch = useDispatch();
  // function roundS(value, step) {
  //   step || (step = 1.0);
  //   var inv = 1.0 / step;
  //   return Math.round(value * inv) / inv;
  // }
  const [currentValue, setCurrentValue] = useState("  ---");
  const [rates, setRates] = useState(0);

  let elementId = "";
  const getElementOnClick = (event) => {
    elementId = event.currentTarget.id;
  };
  function showValue(value) {
    setRates(value);
  }
  async function rating(value, routeIdL) {
    if (elementId === routeIdL) {
      dispatch(rate(routeIdL));
      await axios.post(
        `https://routeu-backend.herokuapp.com/ratings/${routeIdL}`,
        { rating: value },
        { headers: { authorization: user?.token } }
      );
      const resVal = await axios.get(
        `https://routeu-backend.herokuapp.com/ratings/`,
        {
          headers: { authorization: user?.token },
        }
      );
      const array = resVal.data.ratings;
      const filteredArray = array.filter(
        (element) =>
          element.routeId === routeIdL &&
          element.rating !== null &&
          element.rating !== undefined
      );
      const rateTotal = filteredArray.reduce(function (prev, cur) {
        return prev + cur.rating;
      }, 0);
      const averageRate = rateTotal / filteredArray.length;
      const normalValue = parseFloat(averageRate).toFixed(2);
      const averageRating = document.getElementById(elementId + "p");
      averageRating.innerText = "Puntuación media de la ruta " + normalValue;
      const averageRatingStars = document.getElementById(elementId);
      averageRatingStars.innerHTML=`<ul class="ant-rate" tabindex="0" role="radiogroup">
                                      <li class="ant-rate-star ant-rate-star-full">
                                        <div role="radio" aria-checked="${normalValue>0?true:false}" aria-posinset="1" aria-setsize="5" tabindex="0">
                                          <div class="ant-rate-star-first">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="ant-rate-star ant-rate-star-full">
                                        <div role="radio" aria-checked="${normalValue>=2?true:false}" aria-posinset="2" aria-setsize="5" tabindex="0">
                                          <div class="ant-rate-star-first">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="ant-rate-star ant-rate-star-full">
                                        <div role="radio" aria-checked="${normalValue>=3?true:false}" aria-posinset="3" aria-setsize="5" tabindex="0">
                                          <div class="ant-rate-star-first">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="ant-rate-star ant-rate-star-zero">
                                        <div role="radio" aria-checked="${normalValue>=4?true:false}" aria-posinset="4" aria-setsize="5" tabindex="0">
                                          <div class="ant-rate-star-first">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                      <li class="ant-rate-star ant-rate-star-zero">
                                        <div role="radio" aria-checked="${normalValue===5?true:false}" aria-posinset="5" aria-setsize="5" tabindex="0">
                                          <div class="ant-rate-star-first">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                          <div class="ant-rate-star-second">
                                            <span role="img" aria-label="star" class="anticon anticon-star">
                                              <svg viewBox="64 64 896 896" focusable="false" data-icon="star" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                                              </svg>
                                            </span>
                                          </div>
                                        </div>
                                      </li>
                                    </ul>`
      // setRates(normalValue);
    }
  }

  const routeList = routes?.map((elements) => {
    const isAlreadyLiked = elements.likes?.includes(user?.user._id);
    return (
      <>
        <section id="mobileFirst" className="py-5">
          <div id="mobileFirst" className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div id="noHoles" className="col mb-5">
                <div className="card each-card h-100 shink">
                  <Link to={"/getRouteById/" + elements._id}>
                    <img
                      className="card-img-top"
                      src={elements.image}
                      alt="foto de la ruta"
                    />
                  </Link>

                  <div className="card-body p-4">
                    <div className="text-center" key={elements._id}>
                      <h5 className="fw-bolder">{elements.name}</h5>
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent routeFooter">
                    <div className="text-center">
                      {" "}
                      <Link to={"/getRouteById/" + elements._id}>
                        <button
                          className="btn btn-outline-dark mt-auto button-details"
                          href="#"
                        >
                          Detalles
                        </button>
                      </Link>
                    </div>

                    <div className="iconos">
                      {isAlreadyLiked ? (
                        <HeartFilled
                          className="heart"
                          onClick={() => dispatch(dislike(elements._id))}
                          style={{ color: "#FF0000" }}
                        />
                      ) : (
                        <HeartOutlined
                          className="heart"
                          onClick={() => dispatch(like(elements._id))}
                        />
                      )}
                      <span>{elements.likes?.length}</span>
                    </div>
                    <div id={elements._id} onClick={getElementOnClick}>
                      <Rate
                        allowHalf
                        defaultValue={0}
                        onFocus={(value) => {
                          showValue(value);
                        }}
                        onChange={(value) => {
                          rating(value, elements._id);
                        }}
                        value={rates}
                      />
                    </div>
                  </div>
                  <div className="span-rating">
                    <span>
                      <p id={elements._id + "p"} onClick={getElementOnClick}>
                        {" "}
                        Puntuación media de la ruta{" "}
                        <span className="currentValue">{currentValue}</span>
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  });
  return (
    <>
      <div id="noHoles" className="group">
        {routeList}
      </div>
      <BackTop />
      Scroll down to see the bottom-right
      <strong className="site-back-top-basic"> gray </strong>
      button.
    </>
  );
};

export default Route;
