import React from 'react'

export const Card: React.FC<{ height?: string; width: string; imgSrc: string }> = ({
  height,
  width,
  imgSrc,
}) => {
  return (
    <div className="snap-start">
      <img src={imgSrc} height={height} width={width} style={{ margin: 25 }} />
    </div>
  )
}
