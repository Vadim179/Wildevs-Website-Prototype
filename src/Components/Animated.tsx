import { PropsWithChildren } from 'react'
import classnames from 'classnames'

interface IAnimatedProps extends PropsWithChildren {
  animation: string
  className?: string
  infinite?: boolean
  delay?: '2s' | '3s' | '4s' | '5s'
}

const Animated: React.FC<IAnimatedProps> = ({
  animation,
  className,
  children,
  delay,
  infinite = false,
  ...props
}) => {
  const infiniteClass = infinite ? 'animate__infinite' : ''
  const delayClass = delay ? `animate__delay-${delay}` : ''
  const animationClass = `animate__animated animate__${animation} ${infiniteClass} ${delayClass} animate__fast`
  const classes = classnames(className, animationClass)

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Animated
