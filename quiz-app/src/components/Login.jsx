import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/login`, {
                email,
                password
            });
            console.log('response',response)
            console.log('email',email)
            console.log('password',password)
            // Check if login is successful based on the response
            if (response.data === 'Sucess') {
                // Navigate to home page after successful login
                toast("Successfully Login", {
                    type: "success",
                });
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            } else {
                // Set error message if login is not successful
                setError(<span className='text-light'>"Invalid1 email or password"</span>);
            }
        } catch (error) {
            // Set error message for any other errors during login
            setError("An error occurred while logging in");
            console.error(error);
        }
    };

    return (
        <div className="container text-light">
            <h2>Login Page</h2>
            {error && <p className="text-danger">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};

export default Login;