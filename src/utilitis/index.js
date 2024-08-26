import toast from "react-hot-toast";
export const getBlogs = () => {
    let blogs = [];
    const localBlogs = localStorage.getItem('blogs');
    if (localBlogs) {
        blogs = JSON.parse(localBlogs);
    }
    return blogs;
}


// //save
export const saveBlog = (blog) => {
    let blogs = getBlogs();
    const isExist = blogs.find(b => b.id === blog.id);
    if (isExist) {
        return toast.error('Already Bookmarked!')
    }
    blogs.push(blog)
    localStorage.setItem('blogs', JSON.stringify(blogs));
    toast.success('Blog Bookmarked Successfully!');
}


//delete
export const deleteBlog = id => {
    let blogs = getBlogs();
    const remaining = blogs.filter(b => b.id !== id)
    localStorage.setItem('blogs', JSON.stringify(remaining))
    toast.success('Blog removed from Bookmark!')
}

