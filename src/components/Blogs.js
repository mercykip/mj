import React, { useState, useEffect } from 'react';

import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


function Blogs() {


    const [blogs, setBlogs] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mercyjemosop')
            .then(resp => resp.json())
            .then(data => {
                setBlogs(data.items);
                setIsLoading(false);
            })
    }, [])


    console.log(blogs)
    return (
        <div className="blog-grid">


            {isLoading && <p>Fetching data from Medium!</p>}

            <span className="col-md-8" >
                <span className="input-group mb-3 ">
                    <input
                        type="text"
                        className="form-control "
                        placeholder="Search Blog"
                        onChange={(e) => {
                            setSearchTerm(e.target.value);
                        }}
                    />

                </span>
            </span>
            {blogs.filter(val => {
                if (searchTerm === "") {
                    return val;
                } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())

                ) {
                    return val;
                }
            }).map(blog => {
                return <div >
                    <div>
                        <Card shadow={5} style={{ minWidth: "450", margin: 'auto' }}>

                            <CardTitle style={{ color: "#000", height: '176px', width: '176px' }}>
                                <img src={blog.thumbnail} alt={blog.title} style={{ height: '176px', width: '290px' }} />
                            </CardTitle>
                            <CardText style={{ color: "#000" }}>{blog.title}</CardText>
                            <CardActions border style={{ color: '#fff' }}>

                                <Button href={blog.link} colored>View Blog</Button>

                            </CardActions>

                            <CardMenu style={{}}>
                                <IconButton name='share'></IconButton>
                            </CardMenu>
                        </Card>
                    </div><br /><br />


                </div >

            })}

        </div >
    );
}


export default Blogs;