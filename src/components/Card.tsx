import React from 'react'

export const Card: React.FC<{height: number, width: number, imgSrc: string}>  = ({height, width, imgSrc}) => {
  return (
    <div className="snap-start">
      <img src={imgSrc}  height={height} width={width} />
    </div>
  )
}
