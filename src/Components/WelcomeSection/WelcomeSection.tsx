import { Animated } from '..'
import './WelcomeSection.scss'

const navLinks = Object.freeze(['about', 'team', 'games', 'contact'])

const c = 'welcome-section-component'

const WelcomeSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(`#${sectionId}`)
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className={c}>
      <div className={`${c}__background`}>
        <div className={`${c}__background-overlay`} />
      </div>
      <div
        className={`${c}__background-label`}
        onClick={() => window.open('https://www.instagram.com/kevin.lann/')}
      >
        By Kevin at Wildevs
      </div>
      <Animated className={`${c}__content`} animation="fadeIn">
        <div className={`${c}__title`}>The Home Of Wildevs</div>
        <div className={`${c}__links`}>
          {navLinks.map((link, index) => (
            <span
              key={index}
              className={`${c}__link`}
              onClick={() => scrollToSection(link)}
            >
              {link}
            </span>
          ))}
        </div>
      </Animated>
    </div>
  )
}

export default WelcomeSection
