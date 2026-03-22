import React, { useState, useEffect } from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import PROJECTS from '../assets/Projects.js'

function Projects() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function getAPIData() {
            setLoading(false)
        }

        getAPIData()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
            <Navigation
            currentPage='Projects'
        />
        <h1>
        Projects
        </h1>
        This section highlights a selection of software and systems projects spanning backend development, developer tooling, data processing, and computer architecture.
        <hr />
        {PROJECTS.map((project) =>
            <div className='left' key={project.title}>
            <details className='left'>
            <summary className='left'>
            <div className='summary-content'>
            <h2 className='left'>
            {project.title}
            </h2>
            <div className='stack'>
            {project.stack}
            </div>
            </div>
            </summary>

            <br />

            <h3 className='left'>Description</h3>
            <div className='left'>
            {project.description}
            </div>

            <br />

            <h3 className='left'>Role</h3>
            <div className='left'>
            {project.role}
            </div>

            <br />

            <h3 className='left'>Duration</h3>
            <div className='left'>
            {project.time}
            </div>

            {project.links && project.links.length > 0 ? (
                <div className='left'>
                <br />
                <h3 className='left'>External Links</h3>
                <div className='left'>
                {project.links.map((link) =>
                    <a
                    className='left'
                href={link[1]}
                target='_blank'
                rel='noreferrer'
                key={`${project.title}-${link[0]}`}
                >
                <button className='button_link'>
                {link[0]}
                </button>
                </a>
                )}
                </div>
                </div>
            ) : null}

            {project.images && project.images.length > 0 ? (
                <div className='left'>
                <br />
                <h3 className='left'>Images</h3>
                <div className='left'>
                {project.images.map((image, index) =>
                    <img
                    key={`${project.title}-image-${index}`}
                    src={image}
                    className='images'
                alt={`${project.title} preview ${index + 1}`}
                />
                )}
                </div>
                </div>
            ) : null}

            <hr />
            </details>
            </div>
        )}
        </div>
        )
    }
}

export default Projects;
