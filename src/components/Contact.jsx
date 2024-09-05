import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

function Contact() {
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
                        currentPage='Contact'
                    />
                    <h1>
                        Contact
                    </h1>
                    If you are interested and would like to contact me, I have can always be reached in the following ways, and am always willing to entertain a discussion on almost any topic.
                    <br />
                    <br />
                    <hr />
                    <div>
                        <div class='flex-container'>
                            <span class='flex-item'>
                                <b class='larger2'>
                                    Email:
                                    <tab />
                                </b>
                                Rudolph.Sedlin@protonmail.com
                                <tab />
                            </span>
                            <span class='flex-item'>
                                <b class='larger2'>
                                    Phone:
                                    <tab />
                                </b>
                                646-565-7486
                                <tab />
                            </span>
                            <span class='flex-item'>
                                <a class='left' href='https://linkedin.com/in/rudolph-sedlin' target="_blank">
                                    <button>
                                        LinkedIn
                                    </button>
                                </a>
                                <tab />
                            </span>
                            <span class='flex-item'>
                                <a class='left' href='https://github.com/RudolphSedlin' target="_blank">
                                    <button>
                                        Github
                                    </button>
                                </a>
                                <tab />
                            </span>
                            <span class='flex-item'>
                                <a class='left' href='https://www.hackerrank.com/profile/Rudolph_Sedlin' target="_blank">
                                <button>
                                    HackerRank
                                </button>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            )
};

export default Contact;
