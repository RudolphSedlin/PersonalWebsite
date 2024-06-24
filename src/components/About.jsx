import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

function About() {
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
                        currentPage='About'
                    />
                    <h1>
                        About
                    </h1>
                    Listed here are the various software projects I have worked on, sorted chronologically.
                </div>
            )
};

export default About;
