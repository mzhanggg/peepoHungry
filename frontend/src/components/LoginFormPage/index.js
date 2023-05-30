import React, { useState } from 'react';
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
            .catch(async (res) => {
                let data; 
                try {
                    data = await res.clone().json()
                } catch {
                    data = await res.text();
                }

                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            })

    }

    return (
        <div id="form-container">
            <div id="header">
                    <h1>Log in to peepoHungry</h1>
                    <p id="subheader">New to peepoHungry? 
                        <Link to="/signup"> Sign Up</Link>
                    </p>
                    <p id="legal">By continuing, you agree to peepoHungry’s 
                        <a href="/tos"> Terms of Service</a> 
                        <br></br>
                        and acknowledge peepoHungry's <a href="/pp"> Privacy Policy</a>.
                    </p>
            </div>

            <form onSubmit={handleSubmit}>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
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
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default LoginFormPage;


