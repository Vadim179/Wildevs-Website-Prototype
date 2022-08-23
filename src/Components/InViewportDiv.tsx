import { useEffect, useRef, PropsWithChildren, useCallback } from 'react'
import $ from 'jquery'

interface IInViewportDivProps extends PropsWithChildren {
  onInViewport: (elementRef: HTMLDivElement) => any
  [key: string]: any
}

const InViewportDiv: React.FC<IInViewportDivProps> = ({
  children,
  onInViewport,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleWindowScroll = useCallback(
    (e: JQuery.ScrollEvent) => {
      if (ref.current === null) return

      if (
        e.currentTarget.scrollY + window.innerHeight >
        ref.current.getBoundingClientRect().top + e.currentTarget.scrollY
      ) {
        onInViewport(ref.current)
        $(window).off('scroll', handleWindowScroll)
      }
    },
    [onInViewport]
  )

  useEffect(() => {
    $(window).on('scroll', handleWindowScroll)

    return () => {
      $(window).off('scroll', handleWindowScroll)
    }
  }, [handleWindowScroll])

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  )
}

export default InViewportDiv
