import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";

export default function StepOne() {
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 1 }); 
    }, []);

    return (
        <div>
            <div className="list-group">
                <div className="list-group-item"> 
                    <input type="email" placeholder="Email" className="form-control no-border" required autoFocus defaultValue="" />
                </div>
                <div className="list-group-item">
                    <input placeholder="Name" className="form-control no-border" required defaultValue="" />
                </div>
                <div className="list-group-item">
                    <input type="password" placeholder="Password" className="form-control no-border" required defaultValue="" />
                </div>
                <div className="list-group-item">
                    <input type="password" placeholder="Confirm Password" className="form-control no-border" required defaultValue="" />
                </div>
            </div>
            <div className="text-center" style={{ marginTop: 24 }}>
                <Link to="/step2" className="btn btn-official m-b-md next">
                    Next
                </Link>
            </div>
        </div>
    );
}
