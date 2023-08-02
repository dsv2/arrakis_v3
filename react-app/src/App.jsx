import React from "react";
import LoginForm from "./components/pets/LoginForm";
//import { Pets } from "./components/pets/Pets";
//import { Login } from "./components/pets/LoginForm";




function App() {
  return (
    <div className="App">
      <h1>Login Page</h1>
      <LoginForm />
    </div>
  );
}

export default App;



// const App = () => {
//   return <Pets />;
// };

// function App() {
//   const [currentForm, setCurrentForm] = useState('login');

//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   }

//   return (
//     <div className="App">
//       {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//       }
//     </div>
//   );
// }


// export default App;
