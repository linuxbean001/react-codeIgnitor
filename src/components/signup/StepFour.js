import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";

export default function StepFour() {
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 4 }); 
    }, []);

    return (
        <div>
            <p style={{ fontSize: 18 }}>After you've completed the steps to your right, press next</p>
            <div className="text-center" style={{ marginTop: 24 }}>
                <Link to="/step3" className="btn btn-default next" style={{ marginRight: 10 }}>
                    Back
                </Link>
                <Link to="#" className="btn btn-official m-b-md next">
                    Create
                </Link>
            </div>
        </div>
    );
}
