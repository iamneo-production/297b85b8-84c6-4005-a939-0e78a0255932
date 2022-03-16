import React from 'react';
import img from './images/login_page.jpg';
export default function Login() {
    return (
        <div id='loginBox'>
            <img src={img}  alt="Music" id="login-image"/>
            <h1 className='my-3'>LOGIN</h1>
            <div className="mb-3">
                <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i> 
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>

            <div className="mb-3">
                <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                <input type="password" className="form-control" id="password" placeholder="Password"/>
            </div>
            

            <button type="button" className="btn btn-secondary" id='submitButton'>LOGIN</button>
            <p>

                <span>New to E-Furniture Shopping? Click <a href='#'>here</a></span>
            </p>
        </div>
    );
}

// this is wahid 
