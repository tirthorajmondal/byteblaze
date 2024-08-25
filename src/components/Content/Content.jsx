import { useLoaderData } from "react-router-dom";
import placeholderImage from "../../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
const Content = () => {
    const blog = useLoaderData();
    const { title, cover_image, published_at, body_html, body_markdown, tags } = blog;

    return (
        <div className=" mx-auto group p-2 transition border-2  border-opacity-30 ">
            
            <img role="presentation" className="object-cover w-full rounded bg-gray-500 " src={cover_image || placeholderImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                {
                    tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-default-600">#{tag}</a>)
                }
            </div>
            <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
                <span className="text-xs text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
                <div className="max-w-max overflow-hidden">
                    <Markdown rehypePlugins={[rehypeRaw]}>{body_markdown}</Markdown>

                </div>
            </div>
        </div>
    );
};

export default Content;