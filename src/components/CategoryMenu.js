import React from 'react'

const CategoryMenu = ({category}) => {
  console.log(category.name)
  return (
    <div>
      { category.name }
      <ul>
        { category.subCategories.map((subCat) => {
          return (
            <li key={subCat}>
              { subCat }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryMenu