import './TheFooter.scss'

const c = 'footer-component'

const Footer = () => {
  return (
    <div id="contact" className={c}>
      <div className={`${c}__contact`}>
        Join us or report bugs at
        <div className={`${c}__contact-email`}>wildevsgames@gmail.com</div>
      </div>
    </div>
  )
}

export default Footer
