// //Registro y inicio de sesión
// import React, { useState } from "react";
// // import styles from './Auth.module.css';
// import {
//   Box,
//   Form,
//   TextInput,
//   FormField,
//   Button,
//   Main /*Heading, Grommet, grommet*/,
// } from "grommet";

// const initialState = {
//   firstName: "",
//   lastName: "",
//   email: "",
//   password: "",
//   confirmedPassword: "",
// };

// export default function Auth() {
//   const [form, setForm] = useState(initialState);
//   const [isSignup, setIsSignup] = useState(false);
//   const switchMode = () => {
//     setForm(initialState);
//     setIsSignup((prevIsSignup) => !prevIsSignup);
//   };
//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });
//   return (
//     <>
//       <Main pad="large">
//         <Box
//           fill
//           full={true}
//           height="100vh"
//           justify="center"
//           align="center"
//           pad="xlarge"
//           background="dark-2"
//           gap="medium"
//         >
//           <Box
//             align="center"
//             pad="medium"
//             width="medium"
//             height="medium"
//             border={{ color: "brand", size: "medium" }}
//             background={{ color: "light-2", opacity: "strong" }}
//           >
//             <Form justify="center" align="center">
//               {isSignup && (
//                 <>
//                   <FormField
//                     name="name"
//                     label="Nombre"
//                     validate={{ regexp: /^[a-z]/i }}
//                   >
//                     <TextInput name="name" value={""} onChange={handleChange} />
//                   </FormField>
//                   <FormField
//                     name="lastName"
//                     label="Apellido"
//                     validate={{ regexp: /^[a-z]/i }}
//                   >
//                     <TextInput
//                       name="lastName"
//                       value={""}
//                       onChange={handleChange}
//                     />
//                   </FormField>
//                 </>
//               )}
//               <FormField
//                 name="userName"
//                 label="Nombre de usuario"
//                 validate={{ regexp: /^[a-z]/i }}
//               >
//                 <TextInput name="userName" value={""} onChange={handleChange} />
//               </FormField>
//               <FormField
//                 name="password"
//                 label="Contraseña"
//                 validate={{ regexp: /^([a-zA-Z0-9])/i }}
//               >
//                 <TextInput
//                   name="password"
//                   type="password"
//                   value={""}
//                   onChange={handleChange}
//                 />
//               </FormField>
//               {isSignup && (
//                 <FormField
//                   name="confirmedPassword"
//                   label="Confirma tu contraseña"
//                   validate={{ regexp: /^([a-zA-Z0-9])/i }}
//                 >
//                   <TextInput name="name" value={""} onChange={handleChange} />
//                 </FormField>
//               )}
//               <Box justify="center" direction="row" margin={{ top: "medium" }}>
//                 <Button
//                   type="submit"
//                   primary
//                   label={isSignup ? "Registrate" : "Iniciar sesión"}
//                   onClick={""}
//                   pad="medium"
//                   margin={{ horizontal: "xsmall" }}
//                 />
//               </Box>
//               <Box direction="row" margin={{ top: "medium" }}>
//                 <Button
//                   label={
//                     isSignup
//                       ? "¿Ya tienes una cuenta? Inicia sesión"
//                       : "¿Todavía no tienes cuenta? ¡Registrate!"
//                   }
//                   onClick={switchMode}
//                   pad="medium"
//                   margin={{ horizontal: "xsmall" }}
//                 />
//               </Box>
//             </Form>
//           </Box>
//         </Box>
//       </Main>
//     </>
//   );
// }
