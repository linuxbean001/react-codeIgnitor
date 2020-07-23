import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";

export default function StepThree({ setForm, formData }) {
    const [state, dispatch] = useStateValue();
    console.log('Props33:',formData);
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 3 }); 
    }, []);

    return (
        <div>
            <p style={{ fontSize: 18 }}>After you've completed the steps to your right, press next</p>
            <div className="text-center" style={{ marginTop: 24 }}>
                <Link to="/step2" className="btn btn-default next" style={{ marginRight: 10 }}>
                    Skip
                </Link>
                <Link to="/step4" className="btn btn-official m-b-md next">
                    Next
                </Link>
            </div>
        </div>
    );
}
