import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import QUALIFICATIONS from '../assets/Qualifications.js'

function Qualifications() {
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
                        currentPage='Qualifications'
                    />
                    <h1>
                        Qualifications
                    </h1>
                    Listed here are my qualifications and skills, sorted by various categories.
                    {QUALIFICATIONS.map((category) =>
                        <div class='left'>
                            <br />
                            <hr />
                            <h2>
                                {category[0]}
                            </h2>
                            <div class='left'>
                                {category[1].map((qualification) =>
                                    <div class='left'>
                                        <br />
                                        <b class='larger'>
                                            {qualification[0] + ':'}
                                            <tab />
                                        </b>
                                        {qualification[1]}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            )
};

export default Qualifications;
