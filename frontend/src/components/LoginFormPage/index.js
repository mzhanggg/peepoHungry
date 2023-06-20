import React, { useState } from 'react';
import DemoLogin from '../DemoLogin';
import * as sessionActions from '../../store/session';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    
    if (sessionUser) return <Navigate to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        return dispatch(sessionActions.login({email, password}))
            .catch((res) => {
                let data; 
                
                try {
                    data = JSON.parse(res.message);
                } catch {
                    data = res.message;
                }
                if (data?.errors) setErrors(data.errors);
                else setErrors([res.statusText]);

                // console.log(res)
            })

    }

    // console.log(errors)

    return (
        <div id="signup">
            <div id="form-container">
                <div id="form-header">
                        <h1>Log in to peepoHungry</h1>
                        <p id="subheader">New to peepoHungry? 
                            <Link to="/signup"> Sign Up</Link>
                        </p>
                        <p id="legal">By continuing, you agree to peepoHungry’s 
                            <a href="/login"> Terms of Service</a> 
                            <br></br>
                            and acknowledge peepoHungry's <a href="/login"> Privacy Policy</a>.
                        </p>
                </div>

                <form id="login-form" onSubmit={handleSubmit}>
                    <ul>
                    {errors ? errors.map(error => <li key={error}>{error}</li>) : null}
                    </ul>
                    <label>
                        <br></br>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </label>
                    <label>
                        <br></br>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            required
                        />
                    </label>
                    <br></br>
                    <button id="form-btn" type="submit">Login</button>
                    <DemoLogin />
                </form>
                
            </div>

            <div id="image-container">
                <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
            </div>
        </div>
    )

}

export default LoginFormPage;


