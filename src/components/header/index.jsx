import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
export default function Header(params) {
  return (
    <header>
      <div className="container header-container">
        <a className="logo">Linklardan birini tanlab uni bo'sing ! </a>
        <nav>
          <ul className="list">
            <li className="list-item">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="list-item">
              <Link to="/comments">Comments</Link>
            </li>
            <li className="list-item">
              <Link to="/photos">Photos</Link>
            </li>
            <li className="list-item">
              <Link to="/about">Todos</Link>
            </li>
            <li className="list-item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Link to="/" className="header-btn">
          Back to home
        </Link>
      </div>
    </header>
  );
}
