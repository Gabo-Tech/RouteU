import "./Form.scss";
import React, { useState } from "react";
import { Box, Button, Menu, Main } from "grommet";
import { sendDataScienceForm } from "../../api/ApiIndex";
import { update } from "../../features/auth/authSlice";
import Modale from "../Modale/Modale";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MyForm() {
  const navigate = useNavigate();

  const initialState = {
    age: "Año de nacimiento",
    gender: "Género",
    time: "¿De cuánto tiempo dispones para realizar la ruta?",
    route_type: "Tipo de ruta preferida",
    price: "Coste dispuesto a pagar",
    difficulty: "Dificultad",
    companions: "Acompañamiento",
    transport: "Transporte",
    sendBtn: "Enviar",
  };
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const switchMode = async () => {
    setForm({ ...form, sendBtn: "¡Enviado!" });
    const recommendedRouteUserId = await sendDataScienceForm(form);
    console.log(recommendedRouteUserId.data);
    await dispatch(update(recommendedRouteUserId.data));
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  };

  return (
    <>
      <Main id="Main" fill="vertical" pad="xlarge">
        <div className="container">
          <div className="card-main">
            <div className="card-image">
              <h2 className="card-heading">
                Empecemos!
                <small>Cuentanos un poco de ti</small>
              </h2>
            </div>
            <form className="card-form container">
              <Box>
                <div classNameName="division">
                  <div className="input">
                    <Menu
                      className="input"
                      label={form?.age}
                      items={[
                        {
                          label: "1960",
                          onClick: () => {
                            setForm({ ...form, age: 1960 });
                          },
                        },
                        {
                          label: "1961",
                          onClick: () => {
                            setForm({ ...form, age: 1961 });
                          },
                        },
                        {
                          label: "1962",
                          onClick: () => {
                            setForm({ ...form, age: 1962 });
                          },
                        },
                        {
                          label: "1963",
                          onClick: () => {
                            setForm({ ...form, age: 1963 });
                          },
                        },
                        {
                          label: "1964",
                          onClick: () => {
                            setForm({ ...form, age: 1964 });
                          },
                        },
                        {
                          label: "1965",
                          onClick: () => {
                            setForm({ ...form, age: 1965 });
                          },
                        },
                        {
                          label: "1966",
                          onClick: () => {
                            setForm({ ...form, age: 1966 });
                          },
                        },
                        {
                          label: "1967",
                          onClick: () => {
                            setForm({ ...form, age: 1967 });
                          },
                        },
                        {
                          label: "1968",
                          onClick: () => {
                            setForm({ ...form, age: 1968 });
                          },
                        },
                        {
                          label: "1969",
                          onClick: () => {
                            setForm({ ...form, age: 1969 });
                          },
                        },
                        {
                          label: "1970",
                          onClick: () => {
                            setForm({ ...form, age: 1970 });
                          },
                        },
                        {
                          label: "1971",
                          onClick: () => {
                            setForm({ ...form, age: 1971 });
                          },
                        },
                        {
                          label: "1972",
                          onClick: () => {
                            setForm({ ...form, age: 1972 });
                          },
                        },
                        {
                          label: "1973",
                          onClick: () => {
                            setForm({ ...form, age: 1973 });
                          },
                        },
                        {
                          label: "1974",
                          onClick: () => {
                            setForm({ ...form, age: 1974 });
                          },
                        },
                        {
                          label: "1975",
                          onClick: () => {
                            setForm({ ...form, age: 1975 });
                          },
                        },
                        {
                          label: "1976",
                          onClick: () => {
                            setForm({ ...form, age: 1976 });
                          },
                        },
                        {
                          label: "1977",
                          onClick: () => {
                            setForm({ ...form, age: 1977 });
                          },
                        },
                        {
                          label: "1978",
                          onClick: () => {
                            setForm({ ...form, age: 1978 });
                          },
                        },
                        {
                          label: "1979",
                          onClick: () => {
                            setForm({ ...form, age: 1979 });
                          },
                        },
                        {
                          label: "1980",
                          onClick: () => {
                            setForm({ ...form, age: 1980 });
                          },
                        },
                        {
                          label: "1981",
                          onClick: () => {
                            setForm({ ...form, age: 1981 });
                          },
                        },
                        {
                          label: "1982",
                          onClick: () => {
                            setForm({ ...form, age: 1982 });
                          },
                        },
                        {
                          label: "1983",
                          onClick: () => {
                            setForm({ ...form, age: 1983 });
                          },
                        },
                        {
                          label: "1984",
                          onClick: () => {
                            setForm({ ...form, age: 1984 });
                          },
                        },
                        {
                          label: "1985",
                          onClick: () => {
                            setForm({ ...form, age: 1985 });
                          },
                        },
                        {
                          label: "1986",
                          onClick: () => {
                            setForm({ ...form, age: 1986 });
                          },
                        },
                        {
                          label: "1987",
                          onClick: () => {
                            setForm({ ...form, age: 1987 });
                          },
                        },
                        {
                          label: "1988",
                          onClick: () => {
                            setForm({ ...form, age: 1988 });
                          },
                        },
                        {
                          label: "1989",
                          onClick: () => {
                            setForm({ ...form, age: 1989 });
                          },
                        },
                        {
                          label: "1990",
                          onClick: () => {
                            setForm({ ...form, age: 1990 });
                          },
                        },
                        {
                          label: "1991",
                          onClick: () => {
                            setForm({ ...form, age: 1991 });
                          },
                        },
                        {
                          label: "1992",
                          onClick: () => {
                            setForm({ ...form, age: 1992 });
                          },
                        },
                        {
                          label: "1993",
                          onClick: () => {
                            setForm({ ...form, age: 1993 });
                          },
                        },
                        {
                          label: "1994",
                          onClick: () => {
                            setForm({ ...form, age: 1994 });
                          },
                        },
                        {
                          label: "1995",
                          onClick: () => {
                            setForm({ ...form, age: 1995 });
                          },
                        },
                        {
                          label: "1996",
                          onClick: () => {
                            setForm({ ...form, age: 1996 });
                          },
                        },
                        {
                          label: "1997",
                          onClick: () => {
                            setForm({ ...form, age: 1997 });
                          },
                        },
                        {
                          label: "1998",
                          onClick: () => {
                            setForm({ ...form, age: 1998 });
                          },
                        },
                        {
                          label: "1999",
                          onClick: () => {
                            setForm({ ...form, age: 1999 });
                          },
                        },
                        {
                          label: "2000",
                          onClick: () => {
                            setForm({ ...form, age: 2000 });
                          },
                        },
                        {
                          label: "2001",
                          onClick: () => {
                            setForm({ ...form, age: 2001 });
                          },
                        },
                        {
                          label: "2002",
                          onClick: () => {
                            setForm({ ...form, age: 2002 });
                          },
                        },
                        {
                          label: "2003",
                          onClick: () => {
                            setForm({ ...form, age: 2003 });
                          },
                        },
                        {
                          label: "2004",
                          onClick: () => {
                            setForm({ ...form, age: 2004 });
                          },
                        },
                      ]}
                    />
                  </div>
                  <div className="input">
                    <Menu
                      label={form?.gender}
                      items={[
                        {
                          label: "Mujer",
                          onClick: () => {
                            setForm({ ...form, gender: "mujer" });
                          },
                        },
                        {
                          label: "Hombre",
                          onClick: () => {
                            setForm({ ...form, gender: "hombre" });
                          },
                        },
                        {
                          label: "Otro",
                          onClick: () => {
                            setForm({ ...form, gender: "otro" });
                          },
                        },
                      ]}
                    />
                  </div>
                  <div className="input">
                    <Menu
                      label={form?.time}
                      items={[
                        {
                          label: "30 minutos",
                          onClick: () => {
                            setForm({ ...form, time: 30 });
                          },
                        },
                        {
                          label: "1 hora",
                          onClick: () => {
                            setForm({ ...form, time: 60 });
                          },
                        },
                        {
                          label: "1 hora y media",
                          onClick: () => {
                            setForm({ ...form, time: 90 });
                          },
                        },
                        {
                          label: "2 horas",
                          onClick: () => {
                            setForm({ ...form, time: 120 });
                          },
                        },
                        {
                          label: "2 hora y media",
                          onClick: () => {
                            setForm({ ...form, time: 150 });
                          },
                        },
                        {
                          label: "3 horas",
                          onClick: () => {
                            setForm({ ...form, time: 180 });
                          },
                        },
                        {
                          label: "3 horas y media",
                          onClick: () => {
                            setForm({ ...form, time: 210 });
                          },
                        },
                        {
                          label: "4 horas",
                          onClick: () => {
                            setForm({ ...form, time: 240 });
                          },
                        },
                        {
                          label: "4 horas y media",
                          onClick: () => {
                            setForm({ ...form, time: 270 });
                          },
                        },
                        {
                          label: "5 horas",
                          onClick: () => {
                            setForm({ ...form, time: 300 });
                          },
                        },
                        {
                          label: "5 horas y media",
                          onClick: () => {
                            setForm({ ...form, time: 330 });
                          },
                        },
                        {
                          label: "6 horas",
                          onClick: () => {
                            setForm({ ...form, time: 360 });
                          },
                        },
                        {
                          label: "6 horas y media",
                          onClick: () => {
                            setForm({ ...form, time: 390 });
                          },
                        },
                        {
                          label: "7 horas",
                          onClick: () => {
                            setForm({ ...form, time: 420 });
                          },
                        },
                        {
                          label: "7 horas y media",
                          onClick: () => {
                            setForm({ ...form, time: 450 });
                          },
                        },
                        {
                          label: "8 horas",
                          onClick: () => {
                            setForm({ ...form, time: 480 });
                          },
                        },
                      ]}
                    />
                  </div>
                </div>
                <div classNameName="division">
                  <div className="input">
                    <Menu
                      label={form?.transport}
                      items={[
                        {
                          label: "A Pie",
                          onClick: () => {
                            setForm({ ...form, transport: "a pie" });
                          },
                        },
                        {
                          label: "En Bicicleta",
                          onClick: () => {
                            setForm({ ...form, transport: "bicicleta" });
                          },
                        },
                      ]}
                    />
                  </div>
                  <div className="input">
                    <Menu
                      label={form?.companions}
                      items={[
                        {
                          label: "Sólo",
                          onClick: () => {
                            setForm({ ...form, companions: "solo" });
                          },
                        },
                        {
                          label: "Pareja",
                          onClick: () => {
                            setForm({ ...form, companions: "pareja" });
                          },
                        },
                        {
                          label: "Familia",
                          onClick: () => {
                            setForm({ ...form, companions: "familia" });
                          },
                        },
                        {
                          label: "Amigos",
                          onClick: () => {
                            setForm({ ...form, companions: "amigos" });
                          },
                        },
                      ]}
                    />
                  </div>
                  <div className="input">
                    <Menu
                      label={form?.difficulty}
                      items={[
                        {
                          label: "Alta",
                          onClick: () => {
                            setForm({ ...form, difficulty: "alta" });
                          },
                        },
                        {
                          label: "Baja",
                          onClick: () => {
                            setForm({ ...form, difficulty: "baja" });
                          },
                        },
                      ]}
                    />
                  </div>
                </div>
                <div classNameName="division">
                  <div className="input">
                    <Menu
                      label={form?.price}
                      items={[
                        {
                          label: "Free",
                          onClick: () => {
                            setForm({ ...form, price: "gratis" });
                          },
                        },
                        {
                          label: "1 - 50€",
                          onClick: () => {
                            setForm({ ...form, price: "1-50" });
                          },
                        },
                        {
                          label: "+50€",
                          onClick: () => {
                            setForm({ ...form, price: "+50" });
                          },
                        },
                      ]}
                    />
                  </div>
                  <div className="input">
                    <Menu
                      label={form?.route_type}
                      items={[
                        {
                          label: "Histórica",
                          onClick: () => {
                            setForm({ ...form, route_type: "historica" });
                          },
                        },
                        {
                          label: "Turística",
                          onClick: () => {
                            setForm({ ...form, route_type: "turistica" });
                          },
                        },
                        {
                          label: "Literaria",
                          onClick: () => {
                            setForm({ ...form, route_type: "literaria" });
                          },
                        },
                        {
                          label: "Patrimonio",
                          onClick: () => {
                            setForm({ ...form, route_type: "patrimonio" });
                          },
                        },
                      ]}
                    />
                  </div>
                </div>
              </Box>
              <div className="action text-center">
                <Button
                  className="action-button"
                  label={form?.sendBtn}
                  onClick={switchMode}
                  pad="medium"
                  margin={{ vertical: "large", horizontal: "xsmall" }}
                />
              </div>
            </form>

            <div className="card-info">
              <p>
                Enviando Aceptas de este formulario los <Modale />
              </p>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
}
