
import * as React from "react"

const MOBILE_SMALL_BREAKPOINT = 450

export function useSmallMobile() {
  const [isSmallMobile, setIsSmallMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const checkSize = () => {
      setIsSmallMobile(window.innerWidth <= MOBILE_SMALL_BREAKPOINT)
    }
    
    // Initial check
    checkSize()
    
    // Add resize listener
    window.addEventListener('resize', checkSize)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkSize)
  }, [])

  return !!isSmallMobile
}
