import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
  // function to scroll user back to top on route change
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname])
  return null;
}

export default ScrollToTop
