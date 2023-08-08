import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import LoginForm from "./components/pets/LoginForm";
import BondsPage from "./components/pets/BondsPage";
import { useState } from 'react';
import './App.css';
import { TradesPage } from './components/pets/TradesPage';


function App() {

    const [loginSuccess, setLoginStatus] = useState(false);

    return (
        <div className="App">
            <div className="App">
                {!loginSuccess ? <LoginForm
                    loginSuccess={setLoginStatus}
                /> : <TradesPage />}
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
