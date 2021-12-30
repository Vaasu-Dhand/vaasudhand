import React, { MouseEventHandler } from "react";
import { map } from "lodash";
import { Link, animateScroll as scroll } from "react-scroll";
import {
  ARROW_LOGO as LOGO,
  GITHUB,
  LINKEDIN,
  TWITTER,
  USER_ASTRONAUT as HOME,
  TOOLS as SKILLS,
  ALIEN_MONSTER as PROJECTS,
  SPACE_SHUTTLE as CONTACT,
} from "../svg/navicons";

export default function SideBar() {
  const links = { HOME, SKILLS, PROJECTS, CONTACT };

  const socialMedia = { GITHUB, LINKEDIN, TWITTER };

  const socialLinks: { [x: string]: string } = {
    twitter: "twitter.com/DhandVaasu",
    linkedin: "linkedin.com/in/vaasu-dhand-520747191/",
    github: "github.com/Vaasu-Dhand",
  };

  return (
    <div id="sidebar">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a href="#" className="nav-link">
              <span className="link-text logo-text">Vaasu Dhand</span>
              <LOGO />
            </a>
          </li>
          {/* Links */}
          {map(links, (LinkItem: React.ElementType, key) => (
            <li className="nav-item" key={key} onClick={() => {
              console.log('Hello');
            }}>
              <Link activeClass="active" className="nav-link" to={key.toLowerCase()} smooth spy duration={500}>
                <LinkItem />
                <span className="link-text">{key}</span>
              </Link>
            </li>
          ))}
          {/* Social Media */}
          <li className="nav-item">
            <ul className="social-media">
              {map(socialMedia, (Media: React.ElementType, key) => (
                <li className="nav-link" key={key}>
                  <a
                    href={`https://${socialLinks[key.toLowerCase()]}`}
                    className="nav-link"
                    target="_blank"
                  >
                    <Media />
                    <span className="link-text">{key}</span>
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
