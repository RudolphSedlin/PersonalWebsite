import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import CERTIFICATIONS from '../assets/Certifications.js'

function Certifications() {
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
                        currentPage='Certifications'
                    />
                    <h1>
                        Certifications
                    </h1>
                    Listed here are my certifications, grouped by issuer or category. More certifications are pending.
                    <hr />
                    {CERTIFICATIONS.map((category) =>
                        <div class='left'>
                            <details class='left'>
                                <summary class='left'>
                                    <div class='summary-content'>
                                        <h2 class='left'>
                                            {category.title}
                                        </h2>
                                    </div>
                                </summary>
                                <br />
                                <h3 class='left'>Description:</h3>
                                {category.description}
                                {category.images && category.images[0] ?
                                    <div class='left'>
                                    <br />
                                    <h3 class='left'>Images:</h3>
                                    {category.images.map((image) =>
                                        <img src={image} class='images'/>
                                    )}
                                    </div> :
                                    <></>
                                }
                                {category.iframes && category.iframes[0] ?
                                    <div class='left'>
                                    <br />
                                    <h3 class='left'>iframes:</h3>
                                    {category.iframes.map((iframe) =>
                                        <iframe src={iframe} class='images'/>
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

export default Certifications;
