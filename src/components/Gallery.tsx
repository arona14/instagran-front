import { Link } from 'react-router-dom'
import { Card } from './Card'

const Gallery = ({ galleries }: { galleries: any[] }) => {
  return (
    <div className="grid grid-cols-4 grid-flow-col gap-2">
      {galleries.map((url) => (
        <Link key={url.image} to={`/detail/${url?.id}`}>
          {' '}
          <Card imgSrc={url.image} height={'80px'} width={'100px'} />
        </Link>
      ))}
    </div>
  )
}

export default Gallery
