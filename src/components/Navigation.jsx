import {Link} from "react-router-dom"
import React from 'react'

import '../App.css'

function Navigation(props) {
    let currentPage;
    let pagesList;

    currentPage = props.currentPage;
    pagesList = ['About', 'Certifications', 'Projects', 'Blog', 'Contact'];

    return (
        <div id='Navigation' class='Navigation'>
            {
                pagesList.map((page) =>
                    page === currentPage ?
                    <Link to={'/' + page}>
                        <button disabled>{page}</button>
                    </Link> :
                    <Link to={'/' + page}>
                        <button >{page}</button>
                    </Link>
            )}
            <br />
            <br />
        </div>
    );
};

export default Navigation;
