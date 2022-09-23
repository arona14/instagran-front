import React from 'react'

export const Footer: React.FC = () => {
  const profileId = localStorage.getItem('profileID')
  console.log(profileId)

  return (
    <footer className="p-4 w-full text-center left-0 bottom-0  fixed bg-slate-200  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <a href={`/profile/${profileId}`}>Profile</a>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="/" className="mr-4 hover:underline md:mr-6 ">
            Feed
          </a>
        </li>
      </ul>
    </footer>
  )
}
