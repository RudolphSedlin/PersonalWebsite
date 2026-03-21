import React, { useState, useEffect } from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import QUALIFICATIONS from '../assets/Qualifications.js'

function About() {
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
            currentPage='About'
        />
        <h1>
        About
        </h1>
        I am a Technology Analyst at Fiserv and a Computer Science graduate of Stevens Institute of Technology with a minor in Mathematics. My work focuses on data-intensive application development, particularly in telemetry, backend systems, and enterprise software. Beyond software development, I maintain a strong interest in computing hardware, benchmarking and overclocking, semiconductor manufacturing, and astronomy. I approach technical work with patience, diligence, adaptability, and a collaborative mindset.
        <br />
        <br />
        To learn more, please explore the other sections of this website. For questions about my work or for professional inquiries, please feel free to email me.
        <br />
        <br />
        Below is a categorized overview of my qualifications and technical background.
        <hr />
        {QUALIFICATIONS.map((category) =>
            <div className='left' key={category[0]}>
            <details className='left' id='qualifications'>
            <summary className='left'>
            <div className='summary-content'>
            <h2 className='left'>
            {category[0]}
            </h2>
            </div>
            </summary>
            <div className='left'>
            {category[1].map((qualification) =>
                <div className='left' key={qualification[0]}>
                <details className='left'>
                <summary className='left'>
                <div className='summary-content'>
                <b className='larger'>
                {qualification[0]}
                </b>
                </div>
                </summary>
                <div
                className='left'
            dangerouslySetInnerHTML={{ __html: qualification[1] }}
            />
            </details>
            </div>
            )}
            </div>
            <hr />
            </details>
            </div>
        )}
        </div>
        )
    }
}

export default About;
