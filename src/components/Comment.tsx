import React from 'react'

export const Comment: React.FC<{ comment: any }> = ({ comment }) => {
  return (
    <div>
      <p>
        {comment.profile.user.username}: {comment.content}
      </p>
    </div>
  )
}
