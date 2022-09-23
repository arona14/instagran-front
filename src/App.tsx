import React from 'react'
import './App.css'
import { Card } from './components/Card'
import { Search } from './components/Search'

function App() {
  return (
    <div>
      <nav className="bg-slate-200 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex justify-center items-center">
            <Search />

            {/* <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 dark:text-white hover:underline">
                  Features
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
      {/* <div>
        <Card />
      </div> */}
    </div>
  )
}

export default App
