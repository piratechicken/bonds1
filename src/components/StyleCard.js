import React from 'react'
import undie from './undie.jpg';


const StyleCard = ({
  style
}) => {
  return (
    <div className="style-card">
      <div className="style-pic">
        <img src={undie} className="undie" alt="undies" />
      </div>
      <div className="style-text">
        { style.name.toUpperCase() }
        <br/>
        <br/>
        ${ style.price }
      </div>
    </div>

  )
}

export default StyleCard