import React from 'react'
import CategoryMenu from './CategoryMenu'

const AudienceHover = ({
   audient,
   onAudienceMouseOut,
   onSelectSubcategory
}) => {

  return (
  <div className="hover-menu"
       onMouseOut={ onAudienceMouseOut }
  >
    { audient.category.map((category) => {
        return (
          <CategoryMenu
            key={ category.name }
            category={ category }
            onSelectSubcategory={ onSelectSubcategory }
          />
        )
      })
    }
  </div>
  )
}

export default AudienceHover