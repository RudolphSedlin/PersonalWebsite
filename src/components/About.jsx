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
                    I am a Senior Computer Science undergraduate student at Stevens Institute of Technology. I am interested in pursuing a career in SRE, SWE, and Data Science. Additionally, I am also passionate about computing hardware, infrastructure, semiconductor manufacturing, and astronomy. I am a diligent, patient, and collaborative problem solver and adaptable to most situations.
                    <br />
                    <br />
                    This website is currently a fairly spartan React thick-client at the moment, with plans to migrate to a more advanced web-stack in the not too distant future. It is hosted on a Fedora AWS EC2 instance in US-East-1, and I am wondering if it is secure. Feel free to check out the other tabs to learn more, it was a pleasure acquainting. If you have questions or requests regarding my work, please email me.
                    <br />
                    <br />
                    <hr />
                    <div>
                        <h2>
                            Contact
                        </h2>
                        <b class='larger'>
                            Email:
                            <tab />
                        </b>
                        Rudolph.Sedlin@protonmail.com
                        <tab />
                        <b class='larger'>
                            Phone:
                            <tab />
                        </b>
                        646-565-7486
                        <tab />
                        <a class='left' href='https://linkedin.com/in/rudolph-sedlin' target="_blank">
                            <button>
                                LinkedIn
                            </button>
                        </a>
                        <tab />
                        <a class='left' href='https://github.com/RudolphSedlin' target="_blank">
                            <button>
                                Github
                            </button>
                        </a>
                    </div>
                    <br />
                    <hr />
                    <div>
                        <h2>
                            Resume
                        </h2>
                        <img src='/images/Resume.png' width='1000px'/>
                    </div>
                </div>
            )
};

export default About;
