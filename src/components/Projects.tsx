import React, { useEffect } from "react";
import { isArrayLike } from "lodash";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {projects} from "../../public/json/projects.json";

export default function Projects() {

  const animation = useAnimation();
  const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: true });

  // * Starts Animation in the right ViewPort
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else {
      animation.start("initial");
    }

    inView && animation.start("animate");
  }, [animation, inView]);

  const frameVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.5,
        ease: [0.02, 0.6, -0.01, 0.91],
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: [0.02, 0.6, -0.01, 0.91],
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="container"
      ref={ref}
      variants={frameVariants}
      animate={animation}
      initial="hidden"
    >
      <h1>Projects</h1>

      {projects &&
        projects.map(
          ({ name, tags, links: { live, github }, description }: Project) => (
            <motion.div variants={itemVariants} className="project" key={name}>
              <div className="media">
                <img src="./Images/image.gif" alt={name + " - Project"} />
              </div>
              <div className="project-info">
                <h1 className="">{name}</h1>
                <h5>
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </h5>
                <div>
                  <p>{description}</p>
                </div>
                <div className="link-container">
                  <a href={live} target="_blank" className="button-white">
                    LIVE
                  </a>
                  <a href={github} target="_blank" className="button-white">
                    GITHUB
                  </a>
                </div>
              </div>
            </motion.div>
          )
        )}
    </motion.section>
  );
}

interface Project {
  name: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  description: string;
}
