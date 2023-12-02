import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  dark-bg" data-bs-theme="dark" id={styles.Nav}>

      <div className="container-fluid">
        <a className={styles.navbarbrand} href="/">Yemny Feliz</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id="menuItems">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>

          </ul>

        </div>
      </div>
      
    </nav>

  )
}

export default NavBar