import React from "react";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="inputEmail" className="form-label">E-mail address:</label>
        <input type={"email"} className="form-control" id="inputEmail" aria-describedby="email" placeholder="Your e-mail address"/>
      </div>
      <div className="mb-3">
        <label htmlFor="inputPassword" className="form-label">Password:</label>
        <input type={"password"} className="form-control" id="inputPassword" aria-describedby="password" placeholder="Your password"/>
      </div>
      <div className="mb-3 form-check">
        <input type={"checkbox"} className="form-check-input" id="rememberMe" />
        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
      </div>
      <div className="row d-flex flex-wrap">
        <div className="col-6">
          <button type="submit" className="btn btn-primary" style={{width: "100%"}}>Sign in</button>
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center flex-wrap">
          <a href="#!">Forgot your password?</a>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;