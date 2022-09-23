import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { Feed } from './pages/feed'
import { Profile } from './pages/profile'
import { Detail } from './pages/detail'
import ErrorPage from './pages/error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Feed />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile/:id',
    element: <Profile />,
  },
  {
    path: '/detail/:id',
    element: <Detail />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
    <App />
  </>
)
