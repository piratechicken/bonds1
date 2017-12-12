import React from 'react'

function StylePage({ styles }) {
  return (
    <div className='style-page'>
      {
        styles.map((style) => {
          <StyleCard style={ style }/>
        })
      }
    </div>
  )
}

export default StylePage