import React, { useState, useEffect } from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import BLOGS from '../assets/Blogs.js'

function Blog() {
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
            <Navigation
            currentPage='Blog'
        />
        <h1>
        Blog
        </h1>
        This section contains technical writing, project updates, and longer-form commentary on software, systems, and hardware design. Posts are listed in reverse chronological order.
        <hr />
        {BLOGS.map((blog) =>
            <div className='left' key={`${blog.title}-${blog.date}`}>
            <details className='left'>
            <summary className='left'>
            <div className='summary-content'>
            <h2 className='left'>
            {blog.title}
            </h2>
            <div className='blog-date left'>
            {blog.date}
            </div>
            </div>
            </summary>

            <br />

            <div
            className='left'
        dangerouslySetInnerHTML={{ __html: blog.post }}
        />

        {blog.links && blog.links.length > 0 ? (
            <div className='left'>
            <br />
            <h3 className='left'>
            External Links
            </h3>
            <div className='left'>
            {blog.links.map((link) =>
                <a
                className='left'
            href={link[1]}
            target='_blank'
            rel='noreferrer'
            key={`${blog.title}-${link[0]}`}
            >
            <button className='button_link'>
            {link[0]}
            </button>
            </a>
            )}
            </div>
            </div>
        ) : null}

        {blog.images && blog.images.length > 0 ? (
            <div className='left'>
            <br />
            <h3 className='left'>
            Images
            </h3>
            <div className='left'>
            {blog.images.map((image, index) =>
                <img
                key={`${blog.title}-image-${index}`}
                src={image}
                className='images'
            alt={`${blog.title} illustration ${index + 1}`}
            />
            )}
            </div>
            </div>
        ) : null}

        <hr />
        </details>
        </div>
        )}
        </div>
        )
    }
}

export default Blog;
