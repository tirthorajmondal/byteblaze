import { useState } from "react";
import { MdBookmarkAdd } from "react-icons/md";
import { Link, Outlet, useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { saveBlog } from "../../utilitis";

const Blog = () => {
    // const 
    const [tabIndex, setTabIndex] = useState(0);
    const navigation = useNavigation()
    const blog = useLoaderData();
    const { id, title, cover_image, published_at, comments_count, public_reactions_count, reading_time_minutes, tags } = blog;


    const handleBookmark = blog => {
        saveBlog(blog);
    }

    if (navigation.state === 'loading') return <Loader />
    return (
        <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 ">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                        <div className="flex items-center md:space-x-2">

                            <p className="text-sm">{reading_time_minutes} min read • {new Date(published_at).toLocaleDateString()}</p>
                        </div>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count} comments • {public_reactions_count} views</p>
                    </div>

                    {/* tabs */}
                    <div className="flex items-center  overflow-x-auto overflow-y-hidden  flex-nowrap  ">
                        <Link to=""
                            onClick={() => setTabIndex(0)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0 ' : 'border-b text-gray-600 '} rounded-t-lg border-gray-300`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Content</span>
                        </Link>
                        <Link to="author"
                            onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b text-gray-600'} rounded-t-lg border-gray-300 `}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Author</span>
                        </Link>
                        <button onClick={() => handleBookmark(blog)} className="flex justify-center items-center p-3 bg- ml-5 rounded-full text-secondary text-2xl bg-purple-200 hover:bg-purple-300"><MdBookmarkAdd /></button>
                    </div>
                    <div className="">
                        <Outlet />
                    </div>
                </div>
            </article>
            {/* <div>

                 tags here 

                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
                    {
                        tags.map(tag => <a key={tag} rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline bg-default-600">#{tag}</a>)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Blog;