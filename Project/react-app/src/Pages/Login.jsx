import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    if (credentialsAreValid) { 
      history.push('/homepage');
    }
  };

  return (
    <div>
          <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
              <form>
                   <div className="mb-3">
                   <label htmlFor="username" className="form-label">Username</label>
                   <input type="text" className="form-control" id="username" placeholder="Enter your username" />
                 </div>
                 <div className="mb-3">
                   <label htmlFor="password" className="form-label">Password</label>
                   <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                 </div>
                <button type="button" onClick={handleLogin} className="btn btn-primary">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  
  );
}

export default Login;
