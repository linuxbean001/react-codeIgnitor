import React from "react";
import { useStateValue } from "../../util/context";
import { STEPS } from "../../util/constants";

export default function Header() {
    const [state] = useStateValue();
    return (
        <div className="signup-header">
            {STEPS.map((step, index) => (
                <div key={index} style={{ marginRight: 20 }}>
                    <span className={`step ${state.step === index + 1 ? "active" : ""}`}>{index + 1}</span>
                    <span className="title">{step.headerTitle}</span>
                </div>
            ))} 
        </div>
    );
}
