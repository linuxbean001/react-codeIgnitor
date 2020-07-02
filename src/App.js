import React from "react";
import "./App.css";
import Signup from "./layout/Signup";
import { StateProvider } from "./util/context";

function App() {
    return (
        <div className="react-app">
            <StateProvider>
                <Signup />
            </StateProvider>
        </div>
    );
}

export default App;
