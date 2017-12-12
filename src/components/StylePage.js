import React from 'react'
import StyleCard from './StyleCard'

function StylePage({ styles }) {
  return (
    <div className='style-page'>
      {
        styles.map((style) => {
          return (
            <StyleCard style={ style }/>
          )
        })
      }
    </div>
  )
}

export default StylePage