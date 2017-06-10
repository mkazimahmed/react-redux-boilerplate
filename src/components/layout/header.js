import React from "react";
import { Link } from "react-router";

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="#">Brand</a>
      </div>

      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav">
          <li className="active">
            <Link href="#">Link <span className="sr-only">(current)</span></Link>
          </li>
          <li><Link href="#">Link</Link></li>
        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </form>
        <ul className="nav navbar-nav navbar-right">
          <li><Link href="#">Link</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
