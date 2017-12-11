import React from 'react'
import CategoryMenu from './CategoryMenu'

const AudienceHover = ({audient}) => {
  return (
    <div>
    { audient.category.map((category) => {
        return (
            key = { category.name }
          <CategoryMenu category={ category } />
        )
      })
    }
    </div>
  )
}

export default AudienceHover