import React, { useState } from 'react';
import DemoLogin from '../DemoLogin';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


function SignupFormPage() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    
    if (sessionUser) return <Navigate to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        
        return dispatch(sessionActions.signup({fname, lname, zipcode, email, password}))
        .catch((res) => {
            let data; 
            try {
                data = JSON.parse(res.message);
            } catch {
                data = res.message;
            }

            if (data?.errors) setErrors(data.errors);
            else setErrors([res.statusText]);
            })

    }

    return (
        <div id="signup">
            <div id="form-container">
                <div id="form-header">
                    <h1>Sign Up for peepoHungry</h1>
                    <p id="subheader">Connect with great local businesses</p>
                    <p id="legal">By continuing, you agree to peepoHungry’s 
                        <a href="/login"> Terms of Service</a> 
                        <br></br>
                        and acknowledge peepoHungry's <a href="/login"> Privacy Policy</a>.
                    </p>
                </div>

                <form id="signup-form" onSubmit={handleSubmit}>

                    <ul id="errors">
                        {errors.map((error)=> <li key={error}>{error}</li>)}
                    </ul>
                    
                    <br></br>

                    <label>
                        <input
                            type="text"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            placeholder="First Name"
                            required
                        />
                    </label>
                    
                    <br></br>

                    <label>
                        <input
                            type="text"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            placeholder="Last Name"
                            required
                        />
                    </label>

                    <br></br>

                    <label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </label>

                    <br></br>

                    <label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </label>

                    <br></br>

                    <label>
                        <input
                            type="text"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                            placeholder="ZIP Code"
                            required
                        />
                    </label>

                    <br></br>

                    <button id="form-btn" type="submit">Sign Up</button>
                    <DemoLogin />
                </form>
            </div>

            <div id="image-container">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
            </div>
        </div>
    )

}

export default SignupFormPage;


