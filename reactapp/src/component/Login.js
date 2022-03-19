import React from 'react';
import img from './images/login_page.jpg';
import { useState, useEffect } from "react";
import Validate from './Validate';

function App() {

        const initialValues = { email: "", password:"" };
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
        <div id='loginBox'>
            <img src={img}  alt="Music" id="login-image"/>
            <h1 className='my-3'>LOGIN</h1>

            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Signed in successfully</div>
            ) : (
                <pre>{JSON.stringify(formValues, undefined,2)}</pre>
                )} */}

            <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i> 
                        <input type="email" name="email" className="form-control" id="email" placeholder="Email" value={formValues.email} onChange={handleChange}/>
                    </div>

                    <p className='error-message'>{formErrors.email}</p>

                    <div className="mb-3">
                        <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                        <input type="password" name='password' className="form-control" id="password" placeholder="Password"  value={formValues.password} onChange={handleChange}/>
                    </div>
                    
                    <p className='error-message'>{formErrors.password}</p>

                    <button type="submit" className="btn btn-secondary" id='submitButton'>LOGIN</button>

                    <p>
                        <span>New to E-Furniture Shopping? Click <a href='/signup'>here</a></span>
                    </p>
                
                </form>
        </div>
    );
}

//commited again
export default App;