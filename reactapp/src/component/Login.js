// import React from 'react';
import img from './images/login_page.jpg';
import { useState, useEffect } from "react";

function App() {

        const initialValues = { email: "", password:"" };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

        const handleChange = (e) => { 
            // console.log(e.target);
            const { name, value } = e.target;
            setFormValues({ ...formValues, [name]: value });
            console.log(formValues);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(validate(formValues));
            setIsSubmit(true);
        };

        useEffect(() => {
            console.log('form errors*******',formErrors);
            if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            }
        }, [formErrors]);
        const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            
            if (!values.email) {
                errors.email = "Email is required!";
            } 
            else if (!regex.test(values.email)) {
                errors.email = "This is not a valid email format!";
            }
            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Password must be more than 4 characters";
            } else if (values.password.length > 10) {
                errors.password = "Password cannot exceed more than 10 characters";
            }
            return errors;
        }


//export default function Login() {
    return (
        <div id='loginBox'>
            <img src={img}  alt="Music" id="login-image"/>
            <h1 className='my-3'>LOGIN</h1>

            {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined,2)}</pre>
                )}

            <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i> 
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
                    </div>

                    <p>{formErrors.email}</p>

                    <div className="mb-3">
                        <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                        <input type="password" name='password' className="form-control" id="password" placeholder="Password"  value={formValues.password} onChange={handleChange}/>
                    </div>
                    
                    <p>{formErrors.password}</p>

                    <button type="submit" className="btn btn-secondary" id='submitButton'>LOGIN</button>

                    <p>
                        <span>New to E-Furniture Shopping? Click <a href='/signup'>here</a></span>
                    </p>
                
                </form>
        </div>
    );
}

export default App;