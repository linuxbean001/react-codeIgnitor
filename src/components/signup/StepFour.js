import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";
import Service from '../../service/service.js';
const CIAPI = new Service();
export default function StepFour({ setForm, formData }) {
    const [state, dispatch] = useStateValue();
    const [message, setMessage] = useState();
    console.log('Props44:',formData);
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 4 }); 
    }, []);

    let handleSubmit = (e) => {
        let messageAlert='';
        let formData1 = new FormData();
        formData1.append('name', formData.name);
        formData1.append('email', formData.email);
        formData1.append('password', formData.password);
        formData1.append('business', formData.business);
        formData1.append('company', formData.company);
        formData1.append('target_geogrphy', formData.target_geogrphy);
        console.log('test:',formData1);
        CIAPI.postSignup(formData1)
              .then(res => {
                  console.log('yessss:',res.data);
                  if(res.data.status == 0){
                    messageAlert = res.data.message;
                    setMessage(messageAlert);
                  }else{
                    messageAlert = res.data.message;
                    setMessage(messageAlert);
                  }
              }).catch(err => {
                  console.log('xxxxxxx xxxx ', err);
              });
      }

    return (
        <div>
            <p style={{ fontSize: 18 }}>After you've completed the steps to your right, press next</p>
            {message ? (<div className="request-danger text-center animated fadeInUp" style={{ display: "block" }}>
                {message}
             </div>) : null }
            <div className="text-center" style={{ marginTop: 24 }}>
                <Link to="/step3" className="btn btn-default next" style={{ marginRight: 10 }}>
                    Back
                </Link>
                <Link onClick={handleSubmit} className="btn btn-official m-b-md next">
                    Create
                </Link>
            </div>
        </div>
    );
}
