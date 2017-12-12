import React from 'react'
import undie from './undie.jpg';


const StyleCard = () => {
  return (
    <div className="style-card">
      <div className="style-pic">
        <img src={undie} className="undie" alt="undies" />
      </div>
      <div className="style-text">
        dummy TEXT
      </div>
    </div>

  )
}

export default StyleCard