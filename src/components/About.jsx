import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import QUALIFICATIONS from '../assets/Qualifications.js'

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
                    I am a Senior Computer Science undergraduate student at Stevens Institute of Technology. I am interested in pursuing a career in SRE, SWE, and Data Science. Additionally, I am also passionate about computing hardware, infrastructure, semiconductor manufacturing, and astronomy. I am a diligent, patient, and collaborative problem solver and adaptable to most situations.
                    <br />
                    <br />
                    This website is currently a fairly spartan React thick-client being served by Apache at the moment, with plans to migrate to a more advanced web-stack in the not too distant future (that said, this simple tech-stack does make things fast, in runtime performance and development). It is hosted on a Fedora AWS EC2 instance in US-East-1. My SSL certificate was acquired from Let's Encrypt.
                    <br />
                    <br />
                    To learn more, please check the other tabs on this webpage. If you have questions or requests regarding my work, please email me.
                    <br />
                    <br />
                    Listed below are my qualifications, sorted by various categories.
                    <hr />
                    {QUALIFICATIONS.map((category) =>
                        <div class='left'>
                            <details class='left' id='qualifications'>
                                <summary class='left'>
                                    <div class='summary-content'>
                                        <h2 class='left'>
                                            {category[0]}
                                        </h2>
                                    </div>
                                </summary>
                                <div class='left'>
                                {category[1].map((qualification) =>
                                    <div class='left'>
                                        <details class='left'>
                                            <summary class='left'>
                                                <div class='summary-content'>
                                                    <b class='larger'>
                                                        {qualification[0]}
                                                    </b>
                                                </div>
                                            </summary>
                                                <div class='left' dangerouslySetInnerHTML={{__html: qualification[1]}} />
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
};

export default About;
