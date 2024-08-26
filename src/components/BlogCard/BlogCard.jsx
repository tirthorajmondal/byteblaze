import placeholderImage from '../../assets/404.jpg'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const BlogCard = ({ blog, deletable, handleDlete }) => {
    const { id, cover_image, title, published_at, description } = blog;

    return (
        <div className='flex relative'>
            <Link to={`/blog/${id}`} className="max-w-sm mx-auto group hover:scale-105 p-2 transition border-2 border-primary border-opacity-30 hover:border-secondary hover:no-underline focus:no-underline relative">
                <img role="presentation" className="object-cover w-full rounded h-44 bg-gray-500 " src={cover_image || placeholderImage} />
                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold  group-hover:underline group-focus:underline">{title}</h3>
                    <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                    <p>{description}</p>
                </div>
            </Link>
            {
                deletable && <div onClick={() => handleDlete(id)} className=" p-2 bg-primary hover:scale-105 absolute -top-5 -right-5 rounded-full cursor-pointer">
                    <MdDelete
                        size={20}
                        className=' text-secondary group-hover:text-primary' />
                </div>
            }
        </div>

    );
};

export default BlogCard;