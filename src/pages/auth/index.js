import React from "react";
import { LoginForm } from "../../utils";
import "./style.scss";
import { FaGooglePlusG, FaFacebookF, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="container bg-body-tertiary rounded">
        <div className="row">
          <div className="col pe-5">
            <h5 className="fw-bold mb-3">Sign in</h5>
            <LoginForm />
            <p className="text-center" style={{marginTop: "1rem", marginBottom: "2rem"}}>Not a member yet? <a href="/register">Sign up now</a> — its fun and easy!</p>
            <hr />
            <div className="separate">OR</div>
            <div className="d-flex flex-column gap-2 mt-4">
              <IconContext.Provider value={{className: "icons"}}>
                <button type="button" className="btn btn-primary p-0">
                  <div className="row p-2">
                    <div className="col-2"><FaFacebookF/></div>
                    <div className="col-10">Sign in with Facebook</div>
                  </div>
                </button>
                <button type="button" className="btn btn-danger p-0">
                  <div className="row p-2">
                    <div className="col-2"><FaGooglePlusG/></div>
                    <div className="col-10">Sign in with Google+</div>
                  </div>
                </button>
                <button type="button" className="btn btn-info p-0 text-white">
                  <div className="row p-2">
                    <div className="col-2"><FaTwitter/></div>
                    <div className="col-10">Sign in with Twitter</div>
                  </div>
                </button>
              </IconContext.Provider>
            </div>
          </div>
          <div className="col ms-5">
            <h5 className="fw-bold">Don&apos;t have an account?</h5>
            <p className="fw-bold">Sign up for MyDramaList and gain access to a world of Asian dramas and movies. It&apos;s quick, easy, and completely free!</p>
            <p>By creating an account, you can enjoy the following features:</p>
            <ul>
              <li>Create your own personalized drama list</li>
              <li>Join in discussions with other fans</li>
              <li>Contribute to the ever-growing database</li>
              <li>Rate and review dramas and movies</li>
              <li>Keep track of your favorite actors and actresses</li>
              <li>Discover new and exciting content</li>
              <li>Less advertisements</li>
              <li>And much more!</li>
            </ul>
            <p>Don&apos;t miss out - sign up now and start enjoying all the benefits of MyDramaList.</p>
            <button type="button" className="btn btn-light border border-2">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };