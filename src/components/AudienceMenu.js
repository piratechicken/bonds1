import React from 'react'
import AudienceHover from './AudienceHover'

const AudienceMenu = ({
  title,
  audience,
  onAudienceHover
}) => {
  return (
      <div className="audience-menu">
        <ul>
          { audience.map((audient) => {
            return (
              <li
                key={ audient.name }
                onMouseOver={ ()=>{ AudienceHover({audient}) } }
              >
                { audient.name }
              </li>
            )
          })}
        </ul>
      </div>
  )
}

export default AudienceMenu