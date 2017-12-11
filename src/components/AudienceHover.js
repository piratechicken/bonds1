import React from 'react'
import CategoryMenu from './CategoryMenu'

const AudienceHover = ({audient}) => {
  return (
    { audient.[].map((category) => {
        return (
          <CategoryMenu category={ category } />
        )
      })
    }
  )
}

export default AudienceHover