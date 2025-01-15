import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const useNavigationLoader = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const routesWithLoader = [
      "/", // Home
      "/signIn",
      "/blogs",
      "/services",
      "/about", // About
      "/projects", // Projects
      "/contact", // Contact
    ];

    // Check if the current route is /product-view-details with any dynamic :productId
    const isProductViewPage = location.pathname.startsWith(
      "/product-view-details/"
    );

    if (
      routesWithLoader.includes(location.pathname) ||
      isProductViewPage // Check if it's the product view page
    ) {
      console.log(`Loading started for route: ${location.pathname}`); // Debug log
      setLoading(true);
      const timeoutId = setTimeout(() => {
        setLoading(false);
        console.log(`Loading ended for route: ${location.pathname}`); // Debug log
      }, 600);

      return () => clearTimeout(timeoutId);
    } else {
      setLoading(false);
    }
  }, [location]);

  return loading;
};

export default useNavigationLoader;
