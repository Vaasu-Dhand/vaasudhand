import React, { useEffect, BaseSyntheticEvent } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { projects } from "../../public/json/projects.json";

export default function Projects() {
  const animation = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  // * Starts Animation in the right ViewPort
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    } else if (!inView && document.scrollingElement && document.scrollingElement.scrollTop < 2000) {
      animation.start("initial");
    }
  }, [animation, inView]);

  const getVideoPath = (key: string): string => {
    return `video/${key}-rec.mov`;
  };

  function handleMouseEnter(e: BaseSyntheticEvent): void {
    e.target.controls = true    
  }

  const frameVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 1,
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
    <>
    <h1 className="section-title" style={{marginLeft: 68.50}}>Projects</h1>
    <motion.section
      id="projects"
      className="container"
      ref={ref}
      variants={frameVariants}
      animate={animation}
      initial="hidden"
    >
      {projects &&
        projects.map(
          ({
            name,
            key,
            tags,
            links: { live, github },
            description,
          }: Project) => (
            <motion.div variants={itemVariants} className="project" key={name}>
              <div className="media">
                <video
                  src={getVideoPath(key)}
                  onMouseEnter={handleMouseEnter}
                  controls={false}
                  loop
                  autoPlay
                  muted
                />
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
    </>
  );
}

interface Project {
  name: string;
  key: string;
  tags: string[];
  links: {
    live: string;
    github: string;
  };
  description: string;
}
