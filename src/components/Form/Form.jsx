//Registro y inicio de sesión
import React, { useState } from 'react'
// import styles from './Auth.module.css';
import { Box, Heading, TextInput, FormField, Button, Menu , Main/*Heading, Grommet, grommet*/ } from 'grommet';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmedPassword: '' };

export default function MyForm() {
	const [form, setForm] = useState(initialState);
	const [isSignup, setIsSignup] = useState(false);
	const switchMode = () => {
        setForm(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };
	const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  return (
    <>
        <Main id="Main" fill="vertical"  pad="xlarge">
          <Heading>Dejanos conocerte, y te recomedaremos las mejores rutas.</Heading>
          <Box >
          <Menu
            label="Edad"
            items={[
              { label: '0-18', onClick: () => {} },
              { label: '19-35', onClick: () => {} },
              { label: '36-44', onClick: () => {} },
              { label: '+45', onClick: () => {} }
            ]}
          />
          <Menu
            label="Género"
            items={[
              { label: 'Mujer', onClick: () => {} },
              { label: 'Hombre', onClick: () => {} },
              { label: 'Prefiero no decirlo', onClick: () => {} }
            ]}
          />
          <Menu
            label="Acompañamiento"
            items={[
              { label: 'Sólo', onClick: () => {} },
              { label: 'Pareja', onClick: () => {} },
              { label: 'Familia', onClick: () => {} }
            ]}
          />
          <Menu
            label="¿De cuánto tiempo dispones para realizar la ruta?"
            items={[
              { label: '1 - 2 horas', onClick: () => {} },
              { label: '3 - 4 horas', onClick: () => {} },
              { label: '5 - 6 horas', onClick: () => {} },
              { label: '7 - 8 horas', onClick: () => {} },
            ]}
          />
          <Menu
            label="Coste dispuesto a pagar            "
            items={[
              { label: 'First Action', onClick: () => {} },
              { label: '1 - 50€', onClick: () => {} },
              { label: '+50€', onClick: () => {} }
            ]}
          />
          <Menu
            label="Dificultad"
            items={[
              { label: 'Alta', onClick: () => {} },
              { label: 'Baja', onClick: () => {} }
            ]}
          />
          <Menu
            label="Transporte"
            items={[
              { label: 'Pie', onClick: () => {} },
              { label: 'Bicicleta', onClick: () => {} }
            ]}
          />
          <Menu
            label="Tipo de ruta preferida"
            items={[
              { label: 'Histórica', onClick: () => {} },
              { label: 'Turística', onClick: () => {} },
              { label: 'Literaria', onClick: () => {} },
              { label: 'Patrimonio', onClick: () => {} },
            ]}
          />
          <Menu
            label="Selecciona tu/s rutas favorita/s"
            items={[
              { label: 'Arbres monumentals i singulars', onClick: () => {} },
              { label: 'Arbres: La volta al món', onClick: () => {} },
              { label: 'Arbres: Els indians', onClick: () => {} },
              { label: 'Arbres: Un passeig per l’Albereda', onClick: () => {} },
              { label: 'Arbres: Un viatge pel Mediterrani', onClick: () => {} },
              { label: 'Ruta Carrer Russafa - la Llotja', onClick: () => {} },
              { label: 'Contes Blasco Ibañez – Ruta 1', onClick: () => {} },
              { label: 'Contes Blasco Ibañez – Ruta 2', onClick: () => {} },
              { label: 'Entre Naranjos', onClick: () => {} },
              { label: 'Glorieta-Santa Catalina', onClick: () => {} },
              { label: 'Jardins del Reial - Glorieta', onClick: () => {} },
              { label: 'La barraca', onClick: () => {} },
              { label: 'Ruta Cultural Anell Ciclista', onClick: () => {} },
              { label: 'Ruta de la Seda', onClick: () => {} },
              { label: "Ruta dels Pecats a l'entorn del Mercat Central", onClick: () => {} },
              { label: 'Ruta pel Centre Històric', onClick: () => {} },
              { label: "Ruta recinte enmurallat d'època islàmica", onClick: () => {} },
              { label: 'Ruta València en bicicleta', onClick: () => {} },
              { label: 'Sant Agustí – Pont de Fusta', onClick: () => {} },
              { label: 'Sant Agustí - Portal Nou', onClick: () => {} },
              { label: 'Serrans - Palau de la Generalitat', onClick: () => {} },
              { label: 'Torres de Quart - Temple', onClick: () => {} },
              { label: "Trinitat - L'Almodí", onClick: () => {} },
              { label: 'Ruta Valencia en la Memòria', onClick: () => {} },
            ]}
          />
          
          </Box>
        </Main>
    </>
  )
}
