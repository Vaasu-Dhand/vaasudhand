import React from 'react';
import { map } from 'lodash';
import {
  HTML5,
  CSS3,
  SASS,
  BOOTSTRAP,
  AMAZONAWS,
  ELIXIR,
  EXPRESS,
  GIT,
  GITHUB,
  REACT,
  REDUX,
  GRAPHQL,
  JAVASCRIPT,
  MONGODB,
  WEBPACK,
  NODE,
  TYPESCRIPT,
  VSCODE,
} from '../svg/';


export default function Skills() {
  const skills = {
    HTML5,
    CSS3,
    SASS,
    BOOTSTRAP,
    JAVASCRIPT,
    TYPESCRIPT,
    REACT,
    REDUX,
    NODE,
    EXPRESS,
    MONGODB,
    GRAPHQL,
    GIT,
    GITHUB,
    VSCODE,
    WEBPACK,
    AMAZONAWS,
    ELIXIR,
  };

  return (
    <section id="skills" className="container">
      <h1>My Toolkit</h1>
      <ul className="wrapper-skills">
        {map(skills, (Skill, key) =>  (
          <li>
            <Skill key={key} className={key.toLowerCase()} />
            <h1>{key}</h1>
          </li>
        ))}
      </ul>
    </section>
  );
}
