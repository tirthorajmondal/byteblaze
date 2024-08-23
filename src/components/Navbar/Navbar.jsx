import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || "light");

    useEffect(() => {
        // code I wrote

        // localStorage.setItem('theme', theme);
        // const localTheme = localStorage.getItem('theme');
        // document.querySelector('html').setAttribute('data-theme', localTheme);


        
        // code from chatgpt
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);


    const handleThemeToggle = e => {
        if (e.target.checked) {
            setTheme('night');
        }
        else {
            setTheme('light')
        }
    }

    return (
        <div>
            <div className="navbar bg-base-100 md:px-10 shadow-xl fixed z-10">
                <div className="navbar-start">
                    <Link to="/" className="text-xl font-bold text-secondary gap-0">Byte<span className="text-primary ">Blaze</span></Link>
                </div>

                <div className="navbar-end flex md:gap-8 lg:gap-x-12">
                    <div className="">
                        <ul className=" hidden md:flex gap-x-4 font-semibold">
                            <NavLink to="/" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
                            <NavLink to="/blogs" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Blogs</NavLink>
                            <NavLink to="/bookmarks" className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Bookmarks</NavLink>
                        </ul>
                    </div>
                    {/*theme toggle button */}
                    <div className="flex justify-center items-center">
                        <label className="grid cursor-pointer place-items-center">
                            <input onChange={handleThemeToggle}
                                type="checkbox"
                                value="night"
                                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <path
                                    d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                            </svg>
                            <svg
                                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Navbar;