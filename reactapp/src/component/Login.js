// import React from 'react';
import img from './images/login_page.jpg';
import { useState, useEffect } from "react";

import {validade} from './validate'

function App() {



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

            <form onSubmit={validade()}>

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

