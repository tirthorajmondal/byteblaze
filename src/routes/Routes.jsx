import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Blogs from "../Pages/Blogs/Blogs";
import Bookmark from "../Pages/Bookmark/Bookmark";
import Home from "../Pages/Home/Home";
import Content from "../components/Content/Content";
import Author from "../components/Author/Author";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&top=7'),
      },
      {
        path: '/blog/:id',
        element: <Blog></Blog>,
        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`)
          }
        ]

      },
      {
        path: '/bookmarks',
        element: <Bookmark />
      }
    ]
  }

])