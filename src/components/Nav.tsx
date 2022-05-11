/*
 * Deprecated (27/12/21)
 */

import React from 'react'
export default function Nav() {
  return (
    <div id="nav">
      <nav>
        {/* 🍔 Menu */}
        <button className="hamburger hamburger--spin" type="button">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <a className="logo">
          {/* <span><</span> */}
          Vaasu Dhand
          {/* <span>/></span> */}
        </a>
        <ul>
          <li><a data-scroll href="#about">About</a></li>
          <li><a data-scroll href="#toolkit">Toolkit</a></li>
          <li><a data-scroll href="#projects">Projects</a></li>
          <li><a data-scroll href="#blog">Blog</a></li>
          <li><a data-scroll href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}
