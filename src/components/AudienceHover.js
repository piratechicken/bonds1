import React from 'react'
import CategoryMenu from './CategoryMenu'

const AudienceHover = ({
   audient,
   onAudienceMouseOut
}) => {
  console.log(audient.name)
  console.log(audient.category)
  return (
  <div className="hover-menu"
       onMouseOut={ onAudienceMouseOut }
  >
    { audient.category.map((category) => {
        return (
          <CategoryMenu
            key={ category.name }
            category={ category }
          />
        )
      })
    }
  </div>
  )
}

export default AudienceHover