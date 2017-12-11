import React from 'react'

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
                onMouseOver={ ()=>{ onAudienceHover(audient) } }
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