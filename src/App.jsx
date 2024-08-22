import Navbar from "./components/Navbar/Navbar"
import "./App.css";
import Home from "./Pages/Home/Home";
import Bookmark from "./Pages/Bookmark/Bookmark";
import Blogs from "./Pages/Blogs/Blogs";


function App() {

  return (
    <>
      <Home />
      <Blogs/>
      <Bookmark/>
    </>
  )
}

export default App;
