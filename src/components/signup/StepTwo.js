import React, { useEffect, useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { useStateValue } from "../../util/context";
import { SET_STEP } from "../../util/constants";

export default function StepTwo({ setForm, formData }) {
    const history = useHistory();
    const [state, dispatch] = useStateValue();
    useEffect(() => {
        dispatch({ type: SET_STEP, step: 2 }); 
    }, []);
    const { company, business, target_geogrphy } = formData;
    const [errors, setErrors] = useState({});
    let handleSubmit = (e) => {
          if (!formData.company) {
              errors.company = 'Company is required';
          }else{
              errors.company= '';
          }

          if (!formData.business) {
              errors.business = 'Business is required';
          }else{
              errors.business= '';
          }

          if (!formData.target_geogrphy) {
              errors.target_geogrphy = 'Target geography is required';
          }else{
              errors.target_geogrphy= '';
          }
          setErrors(errors);
          console.log('Erros:',errors);
     if(errors.company =='' && errors.business =='' &&  errors.target_geogrphy =='' ){
        history.push('/step3');
      }
    }
    return (
        <div>
            <div className="list-group">
                <div>
                    <div className="list-group-item"> 
                        <input onChange={setForm} type="text" name="company" placeholder="Company" className="form-control no-border" required defaultValue={company} />
                    </div>
                    {errors.company && (<p className="is-danger">{errors.company}</p> )}
                </div>
                <div>
                    <div className="list-group-item">
                        <input onChange={setForm} placeholder="Business website. www.example.com" className="form-control no-border" required name="business" defaultValue={business} />
                    </div>
                    {errors.business && (<p className="is-danger">{errors.business}</p> )}
                </div>
                <div>
                    <div className="list-group-item">
                        <input onChange={setForm} placeholder="Target geography" name="target_geogrphy" className="form-control no-border" required defaultValue={target_geogrphy} />
                    </div>
                    {errors.target_geogrphy && (<p className="is-danger">{errors.target_geogrphy}</p> )}
                </div>
            </div>
            <div className="text-center" style={{ marginTop: 24 }}>
            {/* to="/step3" */}
                <Link to="/step1" className="btn btn-default next" style={{ marginRight: 10 }}>
                    Back
                </Link>
                <Link onClick={handleSubmit}  className="btn btn-official m-b-md next">
                    Next
                </Link>
            </div>
        </div>
    );
}
