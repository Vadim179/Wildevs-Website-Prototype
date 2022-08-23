import { useEffect, useState } from 'react'
import { IGame } from '../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { InViewportDiv } from '..'
import $ from 'jquery'

// @ts-ignore
import WordieeLogo from '../../Assets/Wordiee-Logo.png'
// @ts-ignore
import WildersLogo from '../../Assets/Wilders-Logo.jpg'
// @ts-ignore
import MMLogo from '../../Assets/MM-Logo.png'

import './GamesSection.scss'

const c = 'games-section-component'

const GamesSection = () => {
  const [games] = useState<IGame[]>([
    {
      title: 'Wordiee',
      imageURL: '',
      description: '',
      status: 'PRODUCTION',
      platforms: [
        {
          platform: 'google',
          url: 'https://play.google.com/store/apps/details?id=com.wildevs.thewordgame'
        }
      ],
      backgroundColor: '#153799'
    },
    {
      title: 'Minigame Madness',
      imageURL: '',
      description: '',
      status: 'DEVELOPMENT',
      platforms: [],
      backgroundColor: '#626362'
    },
    {
      title: 'Wilders',
      imageURL: '',
      description: '',
      status: 'DEVELOPMENT',
      platforms: [],
      backgroundColor: '#11423C'
    }
  ])

  const getPlatformIcon = (platform: string) => {
    if (platform === 'google') {
      return faGooglePlay
    }

    return faAppStoreIos
  }

  useEffect(() => {
    // getGames().then(setGames)
  }, [])

  return (
    <div id="games" className={c}>
      <div className={`${c}__background`}>
        <div className={`${c}__background-overlay`} />
      </div>
      <InViewportDiv
        className={`${c}__title`}
        onInViewport={(ref: HTMLDivElement) =>
          $(ref).animate({ opacity: 1 }, 1000)
        }
      >
        Our games
      </InViewportDiv>
      <div className={`${c}__games`}>
        {games.map(({ title, status, platforms, backgroundColor }, index) => (
          <InViewportDiv
            key={index}
            className={`${c}__game`}
            style={{ backgroundColor }}
            onInViewport={(ref: HTMLDivElement) => {
              $(ref).animate({ opacity: 1 }, (index + 1) * 500)
            }}
          >
            <img
              className={`${c}__game-logo`}
              src={
                title === 'Wordiee'
                  ? WordieeLogo
                  : title === 'Minigame Madness'
                  ? MMLogo
                  : WildersLogo
              }
              alt={title}
            />
            <div className={`${c}__game-title`}>{title}</div>
            <div className={`${c}__game-status`}>
              {status === 'DEVELOPMENT' ? (
                'In Development'
              ) : (
                <div className={`${c}__game-status-platforms`}>
                  {platforms.map(({ platform, url }, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={getPlatformIcon(platform)}
                      onClick={() => window.open(url)}
                    />
                  ))}
                </div>
              )}
            </div>
          </InViewportDiv>
        ))}
      </div>
    </div>
  )
}

export default GamesSection
