import { useState, useEffect } from 'react';

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    // Use window.scrollY to check the scroll position
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    // Debounce the scroll handler to prevent excessive updates
    const debounce = setTimeout(handleScroll, 10);  // 10ms delay before execution
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(debounce);  // Clear the timeout on cleanup
    };
  }, []);

  return isScrolled;
};

export default useScroll;
