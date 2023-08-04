import React from "react";
import LoginForm from "./components/pets/LoginForm";
//import { Pets } from "./components/pets/Pets";
//import { Login } from "./components/pets/LoginForm";
import BondsPage from "./components/pets/BondsPage";
import { useState } from 'react';



function App() {

    const [loginSuccess, setLoginStatus] = useState(false);

    return (
        <div className="App">
            <div className="App">
                <h1>Login Page</h1>
                {!loginSuccess ? <LoginForm
                    loginSuccess={setLoginStatus}
                /> : <BondsPage />}
            </div>

            <div>
                {

                }
            </div>




            {/* if (loginSuccess) {
          return <BondsPage />;
        }
        return <LoginForm />; */}


        </div>


        // <div>
        //   {
        //     !loginSuccess ?
        //     <LoginPage loginSuccess = {setLoginStatus}/>
        //     :<BondsPage>
        //   }
        // </div>

    );
};



export default App;
