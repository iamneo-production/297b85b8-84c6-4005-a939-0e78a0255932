import img from './images/login_page.jpg';
import Validate from './Validate';
import React, {useState,useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

function App(props) {
        const initialValues = { email: "", password:"" };
        const [formValues, setFormValues] = useState(initialValues);
        const [formErrors, setFormErrors] = useState({});
        const [isSubmit, setIsSubmit] = useState(false);

        const handleChange = (e) => { 
            setFormValues({ ...formValues, [e.target.name]: e.target.value });
        };

        async function loginApi()
        {
            let email = formValues.email;
            let password = formValues.password;
            let item={email,password};
            console.log(item);
        
            const requestOptions = {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(item)
            };
            const response = await fetch('http://localhost:8080/login', requestOptions);
            const result=await response.json();
            localStorage.setItem("user-info",JSON.stringify(result))
            console.log(JSON.stringify(result));
            // history.push("/add")
        }
        
        const handleUpClick = ()=>{
            props.showAlert("alert working!", "success");
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setFormErrors(Validate(formValues));
            setIsSubmit(true);
            
        };

        useEffect(() => {
            if (Object.keys(formErrors).length === 0 && isSubmit) {}
        }, [formErrors]);

    return (
        <div id='loginBox'>
            <img src={img}  alt="Music" id="login-image"/>
            <h1 className='my-3'>LOGIN</h1>


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

                    <button type="submit" className="btn btn-secondary" id='submitButton' onClick={loginApi}>LOGIN</button>

                    <p>
                        <span>New to E-Furniture Shopping? Click <a href='/signup'>here</a></span>
                    </p>
                
                </form>
               
        </div>
    );
}
export default App;