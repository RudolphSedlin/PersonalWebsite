import { Link } from "react-router-dom"
import React from 'react'

import '../App.css'

function Navigation(props) {
    const currentPage = props.currentPage
    const pagesList = ['About', 'Projects', 'Blog', 'Contact']

    return (
        <div id='Navigation' className='Navigation'>
        {pagesList.map((page) => (
            <Link to={'/' + page} key={page}>
            <button disabled={page === currentPage}>
            {page}
            </button>
            </Link>
        ))}

        <br />
        <br />
        </div>
    )
}

export default Navigation;
