import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"
import { Feed } from './pages/feed'
import { Profile } from './pages/profile'
import { Detail } from './pages/detail'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
