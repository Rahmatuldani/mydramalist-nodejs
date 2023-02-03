import React from "react";
import "./style.scss";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">MyDramalist</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Feeds</a></li>
                <li><a className="dropdown-item" href="#!">Articles</a></li>
                <li><a className="dropdown-item" href="#!">Calendar</a></li>
                <li><a className="dropdown-item" href="#!">Trailers</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Explore</a>
              <ul className="dropdown-menu">
                <li><h6 className="dropdown-header">TV Movies</h6></li>
                <li><a className="dropdown-item" href="#!">Top Movies</a></li>
                <li><a className="dropdown-item" href="#!">Most Popular Movies</a></li>
                <li><a className="dropdown-item" href="#!">Newest</a></li>
                <li><a className="dropdown-item" href="#!">Upcoming</a></li>
                <li><a className="dropdown-item" href="#!">Reviews</a></li>
                <li><a className="dropdown-item" href="#!">Recommendations</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="#!">Recommendation For You</a></li>
                <li><a className="dropdown-item" href="#!">Add Movies</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">Community <span className="badge text-bg-success">New</span></a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#!">Feeds</a></li>
                <li><a className="dropdown-item" href="#!">Lists</a></li>
                <li><a className="dropdown-item" href="#!">Forums</a></li>
                <li><a className="dropdown-item" href="#!">Contributors</a></li>
                <li><a className="dropdown-item" href="#!">Games <span className="badge text-bg-success">New</span></a></li>
                <li><a className="dropdown-item" href="#!">Stars Leaderboard <span className="badge text-bg-success">New</span></a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Calendar</a>
            </li>
          </ul>
          <form role="search" className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="auth-btn">
            <a href="#!" className="text-secondary">Sign up</a>
            <a href="/login" className="text-secondary">Log in</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;