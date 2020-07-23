import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";
export default function StepOne({ setForm, formData }) {
    const history = useHistory();
    console.log('Props:',formData);
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 1 }); 
    }, []);
    const { email, name, password, cpassword } = formData;
    const [errors, setErrors] = useState({});
      let handleSubmit = (e) => {
          let flag = false;
            if (!formData.email) {
                errors.email = 'Email address is required';
                flag = false;
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                errors.email = 'Email address is invalid';
            }else{
                errors.email= '';
                flag = true;
            }

            if (!formData.name) {
                errors.name = 'Name is required';
            }else{
                errors.name= '';
                flag = true;
            }

            if (!formData.password) {
                errors.password = 'Password is required';
            }else{
                errors.password= '';
                flag = true;
            }

            if (!formData.cpassword) {
                errors.cpassword = 'Confirm Password is required';
            }else if(formData.cpassword != formData.password){
                errors.cpassword = 'Confirm Password not matched';
            }else{
                errors.cpassword= '';
                flag = true;
            }

            

            setErrors(errors);
            console.log('Erros:',errors);
       if(errors.cpassword =='' && errors.password =='' &&  errors.name ==''  && errors.email ==''){
          history.push('/step2');
        }
      }

 


    return (
        <div>
            <div className="list-group">
                <div>
                    <div className="list-group-item"> 
                        <input onChange={setForm} type="email" placeholder="Email" className="form-control no-border" autoFocus name="email" defaultValue={email} />
                    </div>
                    {errors.email && ( <p className="is-danger">{errors.email}</p>)}
                </div>
                <div>
                    <div className="list-group-item">
                        <input onChange={setForm} placeholder="Name" name="name" className="form-control no-border" defaultValue={name} />
                    </div>
                    {errors.name && (<p className="is-danger">{errors.name}</p> )}
                </div>
                <div>
                    <div className="list-group-item">
                        <input onChange={setForm} type="password" name="password"  placeholder="Password" className="form-control no-border"  defaultValue={password} />
                    </div>
                    {errors.password && (<p className="is-danger">{errors.password}</p> )}
                </div>
                <div>
                    <div className="list-group-item">
                        <input onChange={setForm} type="password" placeholder="Confirm Password" className="form-control no-border"  name="cpassword" defaultValue={cpassword} />
                    </div>
                    {errors.cpassword && (<p className="is-danger">{errors.cpassword}</p> )}
                </div>
            </div>
            <div className="text-center" style={{ marginTop: 24 }}>
            {/* to="/step2" */}
                <Link onClick={handleSubmit} className="btn btn-official m-b-md next">
                    Next
                </Link>
            </div>
        </div>
    );
}
