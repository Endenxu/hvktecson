// src/others/Others.jsx

import React from "react";
import "./others.css";
import othersData from "./othersData";
import { CiFolderOn } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Others = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id="others">
            <h2 data-aos="fade-up">Other Projects</h2>
            <div className="container others__container">
                {othersData.map(({ github, demo, title, preview, tech }, index) => {
                    return (
                        <div
                            key={index}
                            className="other__container"
                            data-aos="zoom-in"
                        >
                            <ul className="other__head">
                                <li>
                                    <CiFolderOn className="other__head-icon" />
                                </li>
                                <li className="other__head-links">
                                    {github && github !== "#" && (
                                        <a
                                            href={github}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="Read more about this on GitHub"
                                        >
                                            <RiGithubLine />
                                        </a>
                                    )}
                                    {demo && demo !== "#" && (
                                        <a
                                            href={demo}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label="View the demo"
                                        >
                                            <FiExternalLink />
                                        </a>
                                    )}
                                </li>
                            </ul>
                            <article className="other__details">
                                {demo && demo !== "#" ? (
                                    <a
                                        href={demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="View the demo"
                                    >
                                        <h3>{title}</h3>
                                    </a>
                                ) : (
                                    <h3>{title}</h3>
                                )}
                                <p>{preview}</p>
                            </article>
                            <ul className="other__tech">
                                {tech.map((item, techIndex) => {
                                    return <li key={techIndex}>{item}</li>;
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Others;
