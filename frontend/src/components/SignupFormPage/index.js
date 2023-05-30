import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import './LoginForm.css';

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
        return dispatch(sessionActions.signup({email, password}))
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
            <form onSubmit={handleSubmit}>
                <h1>Sign Up for peepoHungry</h1>
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )

}

export default SignupFormPage;


