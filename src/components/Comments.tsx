import React from 'react'
import { Comment } from './Comment'

export const Comments: React.FC<{ comments: any }> = ({ comments }) => {
  return (
    <div>
      Comments:
      <div>
        {comments?.map((comment: any) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}
