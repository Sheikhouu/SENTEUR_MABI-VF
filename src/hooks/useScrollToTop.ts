import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Immediate scroll to top for better mobile experience
    // Using requestAnimationFrame for better performance
    const scrollToTop = () => {
      // First, try instant scroll for immediate feedback
      window.scrollTo(0, 0);
      
      // Then use smooth scroll for better UX if supported
      setTimeout(() => {
        if ('scrollBehavior' in document.documentElement.style) {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }, 50);
    };

    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(scrollToTop);
    
    // Also scroll body and html to handle edge cases
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    
  }, [pathname]);
};

export default useScrollToTop; 