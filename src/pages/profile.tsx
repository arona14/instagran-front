import React, { useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export const Profile: React.FC = () => {
  const [profile, setProfile] = useState<any>({})
  const params = useParams()
  if (params?.id) {
    useEffect(() => {
      const url = `https://instagram-arona-back.herokuapp.com/api/profile/${params?.id}/`
      axios
        .get(url)
        .then((value) => {
          setProfile(value.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }, [])
  }

  return (
    <div className="h-screen">
      <div className="flex justify-between h-44 bg-gray-300">
        <div className="h-full pt-4">
          <img src={profile?.logo} alt="" className="rounded-full" width={'30%'} />
        </div>
        <div className="gap-y-8 grid-cols-1 pt-4">
          <div>{profile?.username}</div>
          <div>{profile?.bio}</div>
        </div>
        <div className="pt-4 mr-20">Photos: {profile?.num_photos}</div>
      </div>
      <div className="pt-24 grids gap-3 grids-row-3 grid-flow-row">
        {profile?.photos?.map((photo: any) => (
          <Card key={photo?.image} imgSrc={photo?.image} width={'15%'} />
        ))}
      </div>
    </div>
  )
}
