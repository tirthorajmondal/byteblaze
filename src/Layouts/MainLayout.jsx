import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Blogs from '../Pages/Blogs/Blogs';
import Bookmark from '../Pages/Bookmark/Bookmark';
import Footer from '../components/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar></Navbar>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;