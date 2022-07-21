//Registro y inicio de sesión
import React, { useState, useEffect } from 'react'
// import styles from './Auth.module.css';
import { Box, Heading, TextInput, FormField, Button, Menu , Main/*Heading, Grommet, grommet*/ } from 'grommet';

export default function MyForm() {
  const [favRoutes, setFavRoutes] = useState([]);
  const initialState = { age: 'Edad', gender: 'Género', company: 'Acompañamiento', duration: '¿De cuánto tiempo dispones para realizar la ruta?', price: 'Coste dispuesto a pagar', difficulty: 'Dificultad', transport: 'Transporte', type: 'Tipo de ruta preferida', favouriteRoutes:favRoutes, sendBtn:'Enviar' };
	const [form, setForm] = useState(initialState);
	const switchMode = () => {
        // setTimeout(setForm(initialState), 5000);
        console.log(JSON.stringify(favRoutes));
        setForm({...form, sendBtn: '¡Enviado!'});
        // setForm({ ...form, favouriteRoutes:favRoutes });
        console.log(JSON.stringify(form));
    };
  const selectSeveralRoutes= (e,routeId)=>{
    e.preventDefault();
    e.target.style.backgroundColor = 'blue';
    setFavRoutes([...favRoutes, routeId])
    setForm({ ...form, favouriteRoutes:favRoutes });
  }
  return (
    <>
        <Main id="Main" fill="vertical"  pad="xlarge">
          <Heading>Dejanos conocerte, y te recomedaremos las mejores rutas.</Heading>
          <Box >
          <Menu
            label={form?.age} 
            items={[
              { label: '0-18', onClick: () => {setForm({...form, age: '0-18'}) } },
              { label: '19-35', onClick: () => {setForm({...form, age: '19-35'}) } },
              { label: '36-44', onClick: () => {setForm({...form, age: '36-44'}) } },
              { label: '+45', onClick: () => {setForm({...form, age: '+45'}) } }
            ]}
          />
          <Menu
            label={form?.gender}
            items={[
              { label: 'Mujer', onClick: () => {setForm({...form, gender: 'Mujer'}) } },
              { label: 'Hombre', onClick: () => {setForm({...form, gender: 'Hombre'}) } },
              { label: 'Prefiero no decirlo', onClick: () => {setForm({...form, gender: 'Prefiero no decirlo'}) } }
            ]}
          />
          <Menu
            label={form?.company}
            items={[
              { label: 'Sólo', onClick: () => {setForm({...form, company: 'Sólo'}) } },
              { label: 'Pareja', onClick: () => {setForm({...form, company: 'Pareja'}) } },
              { label: 'Familia', onClick: () => {setForm({...form, company: 'Familia'}) } }
            ]}
          />
          <Menu
            label={form?.duration}
            items={[
              { label: '1 - 2 horas', onClick: () => {setForm({...form, duration: '1 - 2 horas'})} },
              { label: '3 - 4 horas', onClick: () => {setForm({...form, duration: '3 - 4 horas'})} },
              { label: '5 - 6 horas', onClick: () => {setForm({...form, duration: '5 - 6 horas'})} },
              { label: '7 - 8 horas', onClick: () => {setForm({...form, duration: '7 - 8 horas'})} },
            ]}
          />
          <Menu
            label={form?.price}
            items={[
              { label: 'Free', onClick: () => {setForm({...form, price: 'Free'})} },
              { label: '1 - 50€', onClick: () => {setForm({...form, price: '1 - 50€'})} },
              { label: '+50€', onClick: () => {setForm({...form, price: '+50€'})} }
            ]}
          />
          <Menu
            label={form?.difficulty}
            items={[
              { label: 'Alta', onClick: () => {setForm({...form, difficulty: 'Alta'})} },
              { label: 'Baja', onClick: () => {setForm({...form, difficulty: 'Baja'})} }
            ]}
          />
          <Menu
            label={form?.transport}
            items={[
              { label: 'A Pie', onClick: () => {setForm({...form, transport: 'A Pie'})} },
              { label: 'En Bicicleta', onClick: () => {setForm({...form, transport: 'En Bicicleta'})} }
            ]}
          />
          <Menu
            label={form?.type}
            items={[
              { label: 'Histórica', onClick: () => {setForm({...form, type: 'Histórica'})} },
              { label: 'Turística', onClick: () => {setForm({...form, type: 'Turística'})} },
              { label: 'Literaria', onClick: () => {setForm({...form, type: 'Literaria'})} },
              { label: 'Patrimonio', onClick: () => {setForm({...form, type: 'Patrimonio'})} },
            ]}
          />
          <Menu
            label="Selecciona tu/s rutas favorita/s"
            items={[
              { label: 'Arbres monumentals i singulars', onClick: (e) => {selectSeveralRoutes(e,1)} },
              { label: 'Arbres: La volta al món', onClick: (e) => {selectSeveralRoutes(e,2)} },
              { label: 'Arbres: Els indians', onClick: (e) => {selectSeveralRoutes(e,3)} },
              { label: 'Arbres: Un passeig per l’Albereda', onClick: (e) => {selectSeveralRoutes(e,4)} },
              { label: 'Arbres: Un viatge pel Mediterrani', onClick: (e) => {selectSeveralRoutes(e,5)} },
              { label: 'Ruta Carrer Russafa - la Llotja', onClick: (e) => {selectSeveralRoutes(e,6)} },
              { label: 'Contes Blasco Ibañez – Ruta 1', onClick: (e) => {selectSeveralRoutes(e,7)} },
              { label: 'Contes Blasco Ibañez – Ruta 2', onClick: (e) => {selectSeveralRoutes(e,8)} },
              { label: 'Entre Naranjos', onClick: (e) => {selectSeveralRoutes(e,9)} },
              { label: 'Glorieta-Santa Catalina', onClick: (e) => {selectSeveralRoutes(e,10)} },
              { label: 'Jardins del Reial - Glorieta', onClick: (e) => {selectSeveralRoutes(e,11)} },
              { label: 'La barraca', onClick: (e) => {selectSeveralRoutes(e,12)} },
              { label: 'Ruta Cultural Anell Ciclista', onClick: (e) => {selectSeveralRoutes(e,13)} },
              { label: 'Ruta de la Seda', onClick: (e) => {selectSeveralRoutes(e,14)} },
              { label: "Ruta dels Pecats a l'entorn del Mercat Central", onClick: (e) => {selectSeveralRoutes(e,15)} },
              { label: 'Ruta pel Centre Històric', onClick: (e) => {selectSeveralRoutes(e,16)} },
              { label: "Ruta recinte enmurallat d'època islàmica", onClick: (e) => {selectSeveralRoutes(e,17)} },
              { label: 'Ruta València en bicicleta', onClick: (e) => {selectSeveralRoutes(e,18)} },
              { label: 'Sant Agustí – Pont de Fusta', onClick: (e) => {selectSeveralRoutes(e,19)} },
              { label: 'Sant Agustí - Portal Nou', onClick: (e) => {selectSeveralRoutes(e,20)} },
              { label: 'Serrans - Palau de la Generalitat', onClick: (e) => {selectSeveralRoutes(e,21)} },
              { label: 'Torres de Quart - Temple', onClick: (e) => {selectSeveralRoutes(e,22)} },
              { label: "Trinitat - L'Almodí", onClick: (e) => {selectSeveralRoutes(e,23)} },
              { label: 'Ruta Valencia en la Memòria', onClick: (e) => {selectSeveralRoutes(e,24)} },
            ]}
          />
          
          </Box>
          <Button label={form?.sendBtn} onClick={switchMode} pad="medium" margin={{vertical: 'large', horizontal: 'xsmall' }}/>
        </Main>
    </>
  )
}
