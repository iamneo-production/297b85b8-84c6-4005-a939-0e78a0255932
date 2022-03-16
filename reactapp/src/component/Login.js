import React from 'react';
import img from './images/login_page.jpg';
export default function Login() {
    return (
        <div id='login-container'>
            <img src={img}  alt="Music" id="login-image"/>
            <h1 className='my-3'>LOGIN</h1>
            <div className="mb-3">
                <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i> 
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
            </div>

            <div className="mb-3">
                <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                <input type="password" className="form-control" id="exampleFormControlInput2" placeholder="Password"/>
            </div>
            

            <button type="button" className="btn btn-secondary">LOGIN</button>
            <p>
                <span>New to Bookstore? Click <a href='#'>here</a></span>
            </p>
        </div>
    );
}
