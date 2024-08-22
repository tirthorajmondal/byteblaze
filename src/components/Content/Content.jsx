import { useLoaderData } from "react-router-dom";
import  placeholderImage  from "../../assets/404.jpg";
const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, published_at, description } = blog;

    return (
        <div className=" mx-auto group  p-2 transition border-2  border-opacity-30 ">
            <img  role="presentation" className="object-cover w-full aspect-video rounded bg-gray-500 " src={cover_image || placeholderImage} />
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Content;