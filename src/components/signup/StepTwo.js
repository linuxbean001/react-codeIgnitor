import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";

export default function StepTwo() {
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 2 }); 
    }, []);

    return (
        <div>
            <div className="list-group">
                <div className="list-group-item"> 
                    <input type="text" placeholder="Company" className="form-control no-border" required defaultValue="" />
                </div>
                <div className="list-group-item">
                    <input placeholder="Business website. www.example.com" className="form-control no-border" required defaultValue="" />
                </div>
                <div className="list-group-item">
                    <input placeholder="Target geography" className="form-control no-border" required defaultValue="" />
                </div>
            </div>
            <div className="text-center" style={{ marginTop: 24 }}>
                <Link to="/step3" className="btn btn-official m-b-md next">
                    Next
                </Link>
            </div>
        </div>
    );
}
