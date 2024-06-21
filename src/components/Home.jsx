import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

function Home() {
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
                    currentPage='Home'
                />
                <h1>
                    Home
                </h1>
                Welcome to my personal website!
                <br />
                It is currently a fairly spartan React thick-client at the moment, with plans to migrate to a more advanced web-stack in the not too distant future.
            </div>
        )
};

export default Home;
