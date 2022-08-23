import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InViewportDiv } from '..'
import {
  faInstagram,
  faDiscord,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'
import './AboutSection.scss'

const c = 'about-section-component'

const AboutSection = () => {
  return (
    <div id="about" className={c}>
      <InViewportDiv
        className={`${c}__about-wrapper`}
        onInViewport={(ref: HTMLDivElement) => {
          console.log($(ref).find(`.${c}__player`).get(0))
          $(ref)
            .find(`.${c}__player`)
            .addClass(
              'animate__animated animate__fadeInUp animate__delay-2s animate__fast'
            )
        }}
      >
        <div className={`${c}__player`} />
        <InViewportDiv
          className={`${c}__about`}
          onInViewport={(ref: HTMLDivElement) =>
            $(ref).animate({ opacity: 1 }, 1000)
          }
        >
          <div className={`${c}__about-info`}>
            We're a young team of professionals who are passionate about
            developing games. We make casual games for Android & IOS. Since then
            we have been growing both as a team of professionals and as game
            developers. We happily meet new challenges and view them as
            opportunities to expand our gaming development ideas, hone our
            technical skills and gain more experience in the business. This
            approach makes Wildevs the company of choice to make new games.
          </div>
        </InViewportDiv>
      </InViewportDiv>

      <InViewportDiv
        className={`${c}__header`}
        onInViewport={(ref: HTMLDivElement) =>
          $(ref).animate({ opacity: 1 }, 1000)
        }
      >
        Hey, we're Wildevs
        <div className={`${c}__header-socials`}>
          <FontAwesomeIcon
            icon={faInstagram}
            onClick={() =>
              window.open('https://www.instagram.com/wildevs_games/')
            }
          />
          <FontAwesomeIcon
            icon={faYoutube}
            onClick={() =>
              window.open(
                'https://www.youtube.com/channel/UC3OCqqrBoBzLRbWd2IUNsEg'
              )
            }
          />
          <FontAwesomeIcon
            icon={faDiscord}
            onClick={() => window.open('https://discord.gg/fWgay4bfZH')}
          />
        </div>
      </InViewportDiv>
      <div className={`${c}__background`}>
        <div className={`${c}__background-overlay`} />
      </div>
    </div>
  )
}

export default AboutSection
