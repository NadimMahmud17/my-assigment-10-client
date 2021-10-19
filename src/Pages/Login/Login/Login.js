import React from 'react';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { sinInUsingGoogle } = useAuth();
    return (
        <div>
            <h2>Please Loing</h2>
            <button onClick={ sinInUsingGoogle } className="btn btn-info">Google Sine In</button>
        </div>
    );
};

export default Login;