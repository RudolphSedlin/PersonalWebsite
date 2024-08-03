import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import PROJECTS from '../assets/Projects.js'

function Projects() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getAPIData() {
            setLoading(false);
        };

        getAPIData();
    }, []);

    if (loading)
        return <div>Loading...</div>
        else
            return (
                <div>
                    <Navigation
                        currentPage='Projects'
                    />
                    <h1>
                        Projects
                    </h1>
                    Listed here are the various software projects I have worked on, sorted chronologically.
                    <hr />
                    {PROJECTS.map((project) =>
                        <div class='left'>
                            <details class='left'>
                                <summary class='left'>
                                    <h2 class='left'>
                                        {project.title}
                                    </h2>
                                </summary>
                                <br />
                                <h3 class='left'>Description:</h3>
                                {project.description}
                                <br />
                                <br />
                                <h3 class='left'>Role:</h3>
                                {project.role}
                                <br />
                                <br />
                                <h3 class='left'>Duration:</h3>
                                {project.time}
                                {project.links && project.links[0] ?
                                    <div class='left'>
                                        <br />
                                        <h3 class='left'>External Links:</h3>
                                        {project.links.map((link) =>
                                            <a class='left' href={link[1]} target="_blank">
                                                <button class='button_link'>
                                                    {link[0]}
                                                </button>
                                            </a>
                                        )}
                                    </div> :
                                    <></>
                                }
                                {project.images && project.images[0] ?
                                    <div class='left'>
                                        <br />
                                        <h3 class='left'>Images:</h3>
                                        {project.images.map((image) =>
                                            <img src={image} class='images'/>
                                        )}
                                    </div> :
                                    <></>
                                }
                                <hr />
                            </details>
                        </div>
                    )}
                </div>
            )
};

export default Projects;
