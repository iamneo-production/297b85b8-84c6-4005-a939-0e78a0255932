import React from 'react';
import { useState, useEffect } from "react";
import Validate from './Validate';

function App() {

    const initialValues = { email: "", username:"",mobilenumber:"",password:"",confirmpassword:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => { 
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(Validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        }
    }, [formErrors]);


    return (

        <div id='signupBox'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sampleimage"/>
           
            <h1 className='my-3'>SIGN UP</h1>

            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed Up successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined,2)}</pre>
                )} */}

            <form onSubmit={handleSubmit}>
                        
                        <div className="mb-3">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw pass-lock"></i>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Enter Email" value={formValues.email} onChange={handleChange}/>
                        </div>

                        <p className='error-message'>{formErrors.email}</p>

                        <div className="mb-3">
                            <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i>
                            <input type="text" className="form-control" name="username" id="username" placeholder="Enter Username" value={formValues.username} onChange={handleChange}/>
                        </div>

                        <p className='error-message'>{formErrors.username}</p>

                        <div className="mb-3">
                            <i class="fas fa-phone fa-lg me-3 fa-fw pass-lock"></i>
                            <input type="tel" className="form-control" name="mobilenumber" id="mobilenumber" placeholder="Enter Mobile Number" value={formValues.mobilenumber} onChange={handleChange}/>
                        </div>

                        <p className='error-message'>{formErrors.mobilenumber}</p>

                        <div className="mb-3">
                            <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Enter Password" value={formValues.password} onChange={handleChange}/>
                        </div>

                        <p className='error-message'>{formErrors.password}</p>

                        <div className="mb-3">
                            <i class="fas fa-key fa-lg me-3 fa-fw pass-lock"></i>
                            <input type="password" name="confirmpassword" className="form-control" id="confirmpassword" placeholder="Confirm Password" value={formValues.confirmpassword} onChange={handleChange}/>
                        </div>

                        <p className='error-message'>{formErrors.confirmpassword}</p>

                        <button type="submit" id="submitButton" className="btn btn-secondary signup-submit-btn">SIGN UP</button>
                        <p>
                        
                        <span id="signinLink">Already a member? Click <a id="signinLink" href='/login'>here</a></span>
                        </p>
            </form>
        </div>
    );
}

export default App;