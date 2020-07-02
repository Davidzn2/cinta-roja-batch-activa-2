import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/create">
              Crear todo
            </Link>
          </li>
          {/*  MANERA ANTERIOR E INCORRECTA */}
          {/* <a href="/create">Crear con a</a> */}
        </ul>
      </nav>
    </header>
  );
}
