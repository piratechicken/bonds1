import React from 'react'

const AudienceMenu = ({
  title,
  audience,
  onAudienceHover,
  onAudienceMouseOut
}) => {
  return (
      <div className="audience-menu">
        <ul>
          { audience.map((audient) => {
            return (
              <li
                key={ audient.name }
                onMouseOver={ ()=>{ onAudienceHover(audient) } }
                onMouseOut={ onAudienceMouseOut }
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