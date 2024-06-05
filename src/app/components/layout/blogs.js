'use client'
import React, { useEffect, useState } from 'react';
import BlogItem from './blogItem';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error while reading blogs:', error));
    }, []);

    return (
        <div className="bg-white py-7 px-4 md:px-10 lg:px-14">
            <div className="space-y-4">
                {blogs.map(blog => (
                    <BlogItem key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogList;
