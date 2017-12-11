import React from 'react'

const CategoryMenu = ({category}) => {
  console.log(category.name)
  return (
    <div className="category-menu">
      <h3>{ category.name.toUpperCase() }</h3>
      <ul>
        { category.subCategories.map((subCat) => {
          return (
            <li key={subCat}>
              { subCat.toUpperCase() }
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryMenu