import React from 'react';
import img from './images/login_page.jpg';
export default function Login() {
    return (

        <div id='signupBox'>
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>
            {/* <img src={img}  alt="Music" id="sign-up-image"/> */}
            <h1 className='my-3'>SIGN UP</h1>
            <div className="mb-3">
                 
                <i class="fas fa-envelope fa-lg me-3 fa-fw pass-lock"></i>
                <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
            </div>

            <div className="mb-3">
                <i className="fas fa-user fa-lg me-3 fa-fw pass-lock"></i>
                <input type="text" className="form-control" id="username" placeholder="Enter Username"/>
            </div>

            <div className="mb-3">
                <i class="fas fa-phone fa-lg me-3 fa-fw pass-lock"></i>
                <input type="tel" className="form-control" id="mobilenumber" placeholder="Enter Mobile Number"/>
            </div>

            <div className="mb-3">
                <i className="fas fa-lock fa-lg me-3 fa-fw pass-lock"></i>
                <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
            </div>

            <div className="mb-3">
                <i class="fas fa-key fa-lg me-3 fa-fw pass-lock"></i>
                <input type="password" className="form-control" id="confirmpassword" placeholder="Confirm Password"/>
            </div>

            <button type="button" id="submitButton" className="btn btn-secondary signup-submit-btn">SIGN UP</button>
            <p>
                <span id="signinLink">Already a member? Click <a id="signinLink" href='/login'>here</a></span>
            </p>
        </div>
<<<<<<< HEAD
        
=======
        // its sofiah 
>>>>>>> 19517614c4de7e7d1aeac245ba9f5816240890ec
    );
}
