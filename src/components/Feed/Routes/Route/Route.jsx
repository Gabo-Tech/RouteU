
import { Rate } from 'antd';
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { like, dislike, rate } from "./../../../../features/routes/routesSlice"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { relativeTimeRounding } from 'moment';
import axios from 'axios';
const Route = () => {  
  const { user } = useSelector(state => state.auth);
  const { routes } = useSelector((state) => state.routes);
  // const { avgRate} = useSelector((state) => state.avgRate);
  // console.log(avgRate)
  const dispatch = useDispatch();


    const [currentValue, setCurrentValue] = useState(2.5)
    const [rates, setRates] = useState(2.5)
  
  

  
  
    const routeList = routes?.map((elements) => {
    const isAlreadyLiked = elements.likes?.includes(user?.user._id); 
    async function rating(value,routeIdL){
      // const routeComponentId= document.getElementById(value);
      // console.log("THIS IS THE ID OF THE CLICKED COMPONENT", routeComponentId);
      // if(elements._id=== routeIdL){
        dispatch(rate(routeIdL));
        const res = await axios.post(`http://localhost:8080/ratings/${routeIdL}`,{rating:value},{headers: {authorization: user?.token,}});
        console.log("THIS IS THE RATE CALL:",res);
        const resVal = await axios.get(`http://localhost:8080/ratings/`,{headers: {authorization: user?.token,}});
        console.log("THIS IS THE GETRATE CALL:",resVal);
        const array = resVal.data.ratings;
        console.log("This is array",array);
        const filteredArray = array.filter(element => element.routeId === routeIdL && element.rating !== null && element.rating !== undefined);
        console.log("This is filteredArray",filteredArray);
        const rateTotal = filteredArray.reduce(function(prev, cur) {
          return prev + cur.rating;
        }, 0);
        const averageRate=rateTotal/filteredArray.length
        setCurrentValue(averageRate);
        const normalValue= parseFloat(averageRate).toFixed(2);
        setCurrentValue(normalValue);
        setRates(value);

      // }
    }
  
    return (
      <>
        <section id="mobileFirst" className="py-5">
          <div id="mobileFirst" className="container px-4 px-lg-5 mt-5">
            <div  className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div id="noHoles" className="col mb-5">
                <div  className="card h-100">
                  <img
                    className="card-img-top"
                    src={elements.image}
                    alt="foto de la ruta"
                  />

                  <div className="card-body p-4">
                    <div className="text-center" key={elements._id}>
                      <h5 className="fw-bolder">{elements.name}</h5>
                    </div>
                  </div>
                              
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent routeFooter">
                    <div className="text-center">
                      {" "}
                      <Link to={"/getRouteById/" + elements._id}>                        
                        <button className="btn btn-outline-dark mt-auto" href="#">
                          Detalles
                        </button>
                      </Link>
                    </div>
                    <div className='iconos'>
                {isAlreadyLiked ? (
                  <HeartFilled
                    className='heart'
                    onClick={() => dispatch(dislike(elements._id))}
                    style={{ color: '#FF0000' }}
                  />
                ) : (
                  <HeartOutlined
                    className='heart'
                    onClick={() => dispatch(like(elements._id))}
                  />
                )}
                <span>{elements.likes?.length}</span>
              </div>
                <Rate id={elements._id} allowHalf defaultValue={2.5} onChange={(value) => {rating(value, elements._id)}} value={rates}/>
              
                </div>
                <p> Puntuación media de la ruta {currentValue}</p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </>
    );
  });
  return <div id="noHoles" className="group">{routeList}</div>;
};

export default Route;
