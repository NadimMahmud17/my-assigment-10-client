import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const {sinInUsingGoogle, handleRegistration, handleNameChange, handleEmailChange,toggleLogin ,handlePasswordChange, handleResetPassword, isLogin, error} = useAuth();
    return (
        <div className="mx-5">
          <form onSubmit={handleRegistration}>
            <h3 className="text-primary">Please {isLogin ? 'Login' : 'Register'}</h3>
            {!isLogin && <div className="row mb-3">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" onBlur={handleNameChange} className="form-control" id="inputName" placeholder="Your Name" />
              </div>
            </div>}
            <div className="row mb-3">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
              </div>
            </div>
            <div className="row mb-3">
              <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10">
                <input type="password" onBlur={handlePasswordChange} className="form-control" id="inputPassword3" required />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                  <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                  <label className="form-check-label" htmlFor="gridCheck1">
                    Already Registered?
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3 text-danger">{error}</div>
            <button type="submit" className="btn btn-primary">
              {isLogin ? 'Login' : 'Register'}
            </button>
            <button type="button" onClick={handleResetPassword} className="btn btn-secondary btn-sm">Reset Password</button>
    
          </form>
          <br /><br /><br />
          <div>--------------------------------</div>
          <br /><br /><br />
          <button onClick={sinInUsingGoogle}>Google Sign In</button>
        </div>
      );
};

export default Register;