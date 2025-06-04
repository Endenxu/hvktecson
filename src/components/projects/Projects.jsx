//src/projects/projects.jsx
import { useEffect } from "react";
import "./projects.css";
import { FeaturedData } from "./featuredData";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="projects">
            <h5 data-aos="fade-up">Things I Built</h5>
            <h2 data-aos="fade-up">Projects</h2>
            <div className="container projects__container">
                {FeaturedData.map((item, index) => {
                    return (
                        <div key={index} className="project__container">
                            <div
                                className="project__image-container"
                                data-aos="fade-up"
                            >
                                {item.demo && item.demo !== "#" ? (
                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project__image"
                                        aria-label="Click and view the demo"
                                    >
                                        <img
                                            src={item.image}
                                            alt={`Project ${item.title}`}
                                            width={100}
                                            height={100}
                                        />
                                    </a>
                                ) : (
                                    <div className="project__image">
                                        <img
                                            src={item.image}
                                            alt={`Project ${item.title}`}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                )}
                            </div>
                            <article
                                className="project__content"
                                data-aos="fade-right"
                                data-aos-offset="300"
                            >
                                <h5 className="text-primary">Featured Project</h5>
                                {item.demo && item.demo !== "#" ? (
                                    <a
                                        href={item.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="Click and view the demo"
                                    >
                                        <h3>{item.title}</h3>
                                    </a>
                                ) : (
                                    <h3>{item.title}</h3>
                                )}
                                <div className="project__content-details">
                                    <p className="text-light">{item.details}</p>
                                </div>
                                <ul className="project__content-techs">
                                    {item.tech.map((tech, techIndex) => {
                                        return <li key={techIndex}>{tech}</li>;
                                    })}
                                </ul>
                                <div className="project__links">
                                    {item.github && item.github !== "#" && (
                                        <a
                                            href={item.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Read more about this project on github"
                                        >
                                            <RiGithubLine className="project__link-icon" />
                                        </a>
                                    )}
                                    {item.demo && item.demo !== "#" && (
                                        <a
                                            href={item.demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Click and view the demo"
                                        >
                                            <FiExternalLink className="project__link-icon" />
                                        </a>
                                    )}
                                </div>
                            </article>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Project;
