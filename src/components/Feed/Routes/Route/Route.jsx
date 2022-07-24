
import { Rate } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { like, dislike,  } from "./../../../../features/routes/routesSlice"
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Route = () => {  
  const { user } = useSelector(state => state.auth);
  const { routes } = useSelector((state) => state.routes);
  // const { avgRate} = useSelector((state) => state.avgRate);
  // console.log(avgRate)
  const dispatch = useDispatch();

  const routeList = routes?.map((elements) => {
    const isAlreadyLiked = elements.likes?.includes(user?.user._id); 
    
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
                <Rate allowHalf defaultValue={2.5} />
                </div>
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
