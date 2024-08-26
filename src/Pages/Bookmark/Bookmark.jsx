
import { useEffect, useState } from 'react';
import BlogCard from './../../components/BlogCard/BlogCard';
import { getBlogs } from '../../utilitis';
const Bookmark = () => {
    const [blogs, setBlogs] = useState([]);

    // let blogs = JSON.parse(localStorage.getItem('blogs'));

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    return (
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-6">
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog} ></BlogCard>)
            }
        </div>
    );
};

export default Bookmark;