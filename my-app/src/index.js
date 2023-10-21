import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home, Layout, NoPage, User, UserAlbums, Users} from "./components";

async function loadUsers(parameter){
  return parameter;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    errorElement: <NoPage/>,
    children: [
      {
        path: "",
        element: <Home/>,
      }
    ]
  },
  {
    path: "/user",
    element: <Users/>,
    errorElement: <NoPage/>,
    children: [
      {
        path: "/user/:userId",
        element: <User/>,
        loader: loadUsers
      },
      {
        path: "/user/:userId/albums?/:albumId",
        element: <UserAlbums/>,
        loader: loadUsers
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router}/>
  // </React.StrictMode>
);
