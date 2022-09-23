import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Gallery from '../components/Gallery'
import { Header } from '../components/Header'
import { Search } from '../components/Search'

export const Feed: React.FC = () => {
  const url = 'https://instagram-arona-back.herokuapp.com/api/photousers/'
  const [feeds, setfeeds] = useState<any[]>([])
  useEffect(() => {
    axios
      .get(url)
      .then((feeds: any) => {
        setfeeds(feeds?.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <nav className="bg-slate-200 ">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex justify-center items-center">
            <Header>
              <Search />
            </Header>
          </div>
        </div>
      </nav>
      <div className="flex justify-center pt-70">
        <Gallery galleries={feeds} />
      </div>
    </div>
  )
}
