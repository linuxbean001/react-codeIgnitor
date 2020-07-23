import React from "react";
import "./App.css";
import Signup from "./layout/Signup";
//import Signphp from './layout/signphp';
import { StateProvider } from "./util/context";

function App() {
    return (
        <div className="react-app">
            <StateProvider>
                <Signup />
                {/* <Signphp /> */}
            </StateProvider>
        </div>
    );
}

export default App;
