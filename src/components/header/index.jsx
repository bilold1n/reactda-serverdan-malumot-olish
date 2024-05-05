import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(params) {
  return (
    <header>
      <div className="container header-container">
        <a className="logo">Logo</a>
        <nav>
          <ul className="list">
            <li className="list-item">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="list-item">
              <Link to="/about">Todos</Link>
            </li>
            <li className="list-item">
              <Link to="/users">Users</Link>
            </li>
            <li className="list-item">
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
        </nav>
        <button className="header-btn"> Log in</button>
      </div>
    </header>
  );
}
