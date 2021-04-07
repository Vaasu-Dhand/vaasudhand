import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useViewport, Viewport as deviceTypes } from '../hooks/useViewport';
import { useInViewAnimate } from '../hooks/useInViewAnimate'
import { map, size } from 'lodash';
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
    // ReArrange Skills
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
  
  // * Framer Animation
  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
      },
    },
  };

  const listItem = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };
  // Hooks
  
  const { inViewRef, animation } = useInViewAnimate(container)
  
  const deviceType = useViewport(); // * Returns the DeviceType Depending on the Width of Viewport

  const [skillsToBeDisplayed, setSkillsToBeDisplayed] = useState({});

  useEffect(() => {
    console.log('I ran');

    // console.log("Screen Size Changed!", {deviceType});
    let numOfSkillsRemoved;
    switch (deviceType) {
      case deviceTypes.DESKTOP:
        numOfSkillsRemoved = 2;
        break;
      case deviceTypes.WIDE:
        numOfSkillsRemoved = 2;
        break;
      case deviceTypes.PHABLET:
        numOfSkillsRemoved = 0;
        break;
      case deviceTypes.PHONE:
        numOfSkillsRemoved = 0;
        break;
      case deviceTypes.TABLET:
        numOfSkillsRemoved = 3;
        break;
      case deviceTypes.LAPTOP:
        numOfSkillsRemoved = 4;
        break;
      default:
        console.warn('Weird! Screen Size Switch in Default');
        numOfSkillsRemoved = 0;
        break;
      }
      
      // * Slice Skills Depending on Screen Size and Store it in State
      const slicedSkills = Object.fromEntries(
      Object.entries(skills).slice(0, size(skills) - numOfSkillsRemoved)
    );
    setSkillsToBeDisplayed(slicedSkills);
  }, [useViewport()]);


  return (
    <section id="skills" className="container">
      <h1>My Toolkit</h1>
      <motion.ul
        className="wrapper-skills"
        variants={container}
        ref={inViewRef}  
        animate="animate"
        initial="initial"
      >
        {map(skills, (Skill: React.ElementType, key) => (
            <motion.li key={key} variants={listItem}>
              <Skill className={key.toLowerCase()} />
              <h3>{key}</h3>
            </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
