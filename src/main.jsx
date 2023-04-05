import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'









import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home';
import Contact2 from './components/nav/Contact2';
import About from './components/nav/About';
import Home2 from './components/mainHome/Home';




let router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home></Home>,

      children: [
        {
          path: "Contact",
          element: <Contact2></Contact2>
        },

        {
          path: "About",
          element: <About></About>
        },
        {
          path: "/",
          element: <Home2></Home2>
        },


      ]

    },
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
