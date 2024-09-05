import React, {useState, useEffect} from 'react'
import Navigation from './Navigation.jsx'

import '../App.css'

import BLOGS from '../assets/Blogs.js'

function Blog() {
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
                        currentPage='Blog'
                    />
                    <h1>
                        Blog
                    </h1>
                    I intend to post blogs and updates to this page, sorted reverse-chronologically from the top-down.
                    <hr />
                    {BLOGS.map((blog) =>
                        <div class='left'>
                            <details class='left'>
                                <summary class='left'>
                                    <div class='summary-content'>
                                        <h2 class='left'>
                                            {blog.title}
                                        </h2>
                                    </div>
                                </summary>
                                <div class='left'>
                                    <b class='larger'>
                                        Date:
                                        <tab />
                                    </b>
                                    {blog.date}
                                </div>
                                <br />
                                <div class='left' dangerouslySetInnerHTML={{__html: blog.post}} />
                                {blog.links && blog.links[0] ?
                                    <div class='left'>
                                        <br />
                                        <h3 class='left'>
                                            External Links:
                                        </h3>
                                        {blog.links.map((link) =>
                                            <a class='left' href={link[1]} target="_blank">
                                                <button>
                                                    {link[0]}
                                                </button>
                                            </a>
                                        )}
                                    </div> :
                                    <></>
                                }
                                {blog.images && blog.images[0] ?
                                    <div class='left'>
                                        <br />
                                        <h3 class='left'>
                                            Images:
                                        </h3>
                                        {blog.images.map((image) =>
                                            <img src={image} class='images'/>
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

export default Blog;
