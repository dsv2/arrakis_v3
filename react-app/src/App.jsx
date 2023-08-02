import React, { useState } from "react";
import { Pets } from "./components/pets/Pets";
import { Login } from "./components/pets/login";
import { Register } from "./components/register";


// const App = () => {
//   return <Pets />;
// };

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}


export default App;
