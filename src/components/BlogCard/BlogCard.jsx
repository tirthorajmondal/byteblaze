import React from 'react';
import placeholderImage from '../../assets/404.jpg'
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    const { id, title, cover_image, published_at, description } = blog;
    return (
        <Link to={`/blog/${id}`}  className="max-w-sm mx-auto group hover:scale-105 p-2 transition border-2 border-primary border-opacity-30 hover:border-secondary hover:no-underline focus:no-underline ">
            <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 " src={cover_image || placeholderImage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default Blog;