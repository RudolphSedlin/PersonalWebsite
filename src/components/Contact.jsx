import React, { useState, useEffect } from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

function Contact() {
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
            <Navigation currentPage='Contact' />

            <h1>Contact</h1>

            If you would like to get in touch, I can be reached through the following channels. I am always open to discussion across a wide range of topics.
            <br />
            <br />

            <hr />

            <div className='flex-container'>

            <span className='flex-item flex-pill'>
            <b className='larger2'>Email:</b>
            &nbsp;
            Rudolph.Sedlin@protonmail.com
            </span>

            <span className='flex-item flex-pill'>
            <b className='larger2'>Phone:</b>
            &nbsp;
            646-565-7486
            </span>

            <span className='flex-item'>
            <a
            className='left'
        href='https://linkedin.com/in/rudolph-sedlin'
        target='_blank'
        rel='noreferrer'
        >
        <button>LinkedIn</button>
        </a>
        </span>

        <span className='flex-item'>
        <a
        className='left'
        href='https://github.com/RudolphSedlin'
        target='_blank'
        rel='noreferrer'
        >
        <button>GitHub</button>
        </a>
        </span>

        <span className='flex-item'>
        <a
        className='left'
        href='https://www.hackerrank.com/profile/Rudolph_Sedlin'
        target='_blank'
        rel='noreferrer'
        >
        <button>HackerRank</button>
        </a>
        </span>

        </div>
        </div>
        )
    }
}

export default Contact;
