import './Button.scss'

interface IButtonProps {
  title: string
}

const c = 'button-component'

const Button: React.FC<IButtonProps> = ({ title }) => {
  return <div className={c}>{title}</div>
}

export default Button
