import './WelcomeSection.scss'

const navLinks = Object.freeze(['about', 'team', 'games', 'contact'])

const WelcomeSection = () => {
  const c = 'welcome-section-component'

  return (
    <div className={c}>
      <div className={`${c}__background`}>
        <div className={`${c}__background-overlay`} />
      </div>
      <div className={`${c}__logo`} />
      <div className={`${c}__title`}>The Official Home Of Wildevs</div>
      <div className={`${c}__links`}>
        {navLinks.map((link, index) => (
          <span key={index} className={`${c}__link`}>
            {link}
          </span>
        ))}
      </div>
    </div>
  )
}

export default WelcomeSection
