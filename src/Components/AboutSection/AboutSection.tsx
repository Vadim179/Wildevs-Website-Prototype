import './AboutSection.scss'

const AboutSection = () => {
  const c = 'about-section-component'

  return (
    <div className={c}>
      <div className={`${c}__information`}>
        <div className={`${c}__information-header`}>Hey, we're Wildevs.</div>
        <div className={`${c}__information-body`}>
          We're a young team of professionals who are passionate about
          developing games. We make casual games for Android & IOS. We hail from
          Chisinau, the capital of the Republic of Moldova in Eastern Europe.
          Since then we have been growing both as a team of professionals and as
          game developers. We happily meet new challenges and view them as
          opportunities to expand our gaming development ideas, hone our
          technical skills and gain more experience in the business. This
          approach makes Wildevs the company of choice to make new games.
        </div>
      </div>
      <div className={`${c}__background`} />
    </div>
  )
}

export default AboutSection
