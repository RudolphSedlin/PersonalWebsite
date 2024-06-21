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
                    {PROJECTS.map((project) =>
                        <div class='left'>
                            <br />
                            <hr />
                            <h2 class='left'>{project.title}</h2>
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
                            <br />
                            <br />
                            {project.links ?
                                <div class='left'>
                                    <h3 class='left'>External Links:</h3>
                                    {project.links.git ?
                                        <div class='left'>
                                            <a href={project.links.git} target="_blank">
                                                <button>Git</button>
                                            </a>
                                        </div> :
                                        <></>
                                    }
                                    {project.links.website ?
                                        <div class='left'>
                                            <a href={project.links.website} target="_blank">
                                                <button>Website</button>
                                            </a>
                                        </div> :
                                        <></>
                                    }
                                    <br />
                                </div> :
                                <></>
                            }
                            {project.images && project.images[0] ?
                                <div class='left'>
                                    <h3 class='left'>Images:</h3>
                                    {project.images.map((image) =>
                                        <img src={image} class='images'/>
                                    )}
                                </div> :
                                <></>
                            }

                        </div>
                    )}
                </div>
            )
};

export default Projects;