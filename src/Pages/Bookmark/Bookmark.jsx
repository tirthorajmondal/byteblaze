
import { useEffect, useState } from 'react';
import BlogCard from './../../components/BlogCard/BlogCard';
import { deleteBlog, getBlogs } from '../../utilitis';
import EmptyState from '../../components/EmpteyState/EmptyState';
const Bookmark = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }, [])

    const handleDlete = (id) => {
        deleteBlog(id);
        const storedBlogs = getBlogs();
        setBlogs(storedBlogs);
    }

    if(blogs.length< 1) return <EmptyState message={'No Bookmarks Available!'} address={'/blogs'} lavel={'Go to Blogs'}/>
    return (
        <div className="grid justify-center grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto p-6">
            {
                blogs.map(blog => <BlogCard
                    key={blog.id}
                    deletable={true}
                    handleDlete={handleDlete}
                    blog={blog} ></BlogCard>)
            }
        </div>
    );
};

export default Bookmark;