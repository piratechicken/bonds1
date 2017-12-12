import React, { Fragment}  from 'react'
import  { Link } from 'react-router-dom'

const CategoryMenu = ({category}) => {
  console.log(category.name)
  return (
    <div className="category-menu">
      <h3>{ category.name.toUpperCase() }</h3>
      <ul>
        { category.subCategories.map((subCat) => {
          return (
            <li key={subCat}>
              <Link to={`category/${ subCat }`}>{ subCat.toUpperCase() }</Link>
              {/* { subCat.toUpperCase() } */}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CategoryMenu