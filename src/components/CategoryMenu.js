import React from 'react'

const CategoryMenu = ({category}) => {

  return (
    <div>
      { category.name }
      <ul>
        { category.subCategories.map((subCat) => {
          return (
            <li>
              { subCat }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryMenu