import { useState } from 'react'
import { ITeamMember } from '../../types'
import { InViewportDiv } from '..'
import $ from 'jquery'
import './TeamSection.scss'

const c = 'team-section-component'

const TeamSection = () => {
  const [teamMembers] = useState<ITeamMember[]>([
    { name: 'Josh C.', roles: ['Management Lead'] },
    { name: 'Lucas B.', roles: ['Management'] },
    { name: 'Nate J.', roles: ['Management'] },
    { name: 'Vadim V.', roles: ['Technical Lead'] },
    { name: 'Ahmed V.', roles: ['Frontend Developer'] },
    { name: 'Viorel B.', roles: ['Frontend Developer'] },
    { name: 'Artiom O.', roles: ['Backend Developer'] },
    { name: 'Bryce T.', roles: ['Backend Developer'] },
    { name: 'Kevin L.', roles: ['Design Lead'] },
    { name: 'Norman B.', roles: ['Design'] },
    { name: 'Nehad S.', roles: ['Design'] },
    { name: 'Mario H.', roles: ['Design'] },
    { name: 'Jonathan W.', roles: ['SFX Creation'] },
    { name: 'Vlad C.', roles: ['SFX Creation'] },
    { name: 'Tau', roles: ['Technical Support'] },
    { name: 'Dima B.', roles: ['Support'] },
    { name: 'Bogdan R.', roles: ['Support'] }
  ])

  return (
    <div id="team" className={c}>
      <div className={`${c}__background`}>
        <div className={`${c}__background-overlay`} />
      </div>
      <InViewportDiv
        className={`${c}__title`}
        onInViewport={(ref: HTMLDivElement) =>
          $(ref).animate({ opacity: 1 }, 1000)
        }
      >
        Meet the Team
      </InViewportDiv>
      <div className={`${c}__members`}>
        <div className={`${c}__bunny`} />
        {teamMembers.map(({ name, roles }, index) => (
          <InViewportDiv
            key={index}
            className={`${c}__member`}
            onInViewport={(ref: HTMLDivElement) =>
              $(ref).animate({ opacity: 1 }, (index + 1) * 200)
            }
          >
            <div className={`${c}__member-name`}>{name}</div>
            <div className={`${c}__member-roles`}>
              {roles.map((role, index) => (
                <div key={index} className={`${c}__member-role`}>
                  {role}
                </div>
              ))}
            </div>
          </InViewportDiv>
        ))}
      </div>
    </div>
  )
}

export default TeamSection
