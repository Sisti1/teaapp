// Create a new component for handling page status updates
import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageStatus = () => {
  const location = useLocation();

  useEffect(() => {
    // Update the page state based on the current location
    switch (location.pathname) {
      case "/about":
        console.log("You are at about page");
        break;
      case "/cart":
        console.log("You are at cart page");
        break;
      case "/signup":
        console.log("You are at sign-up page");
        break;
      case "/login":
        console.log("You are at login page");
        break;
      case "/teashop":
        console.log("You are at teashop page");
        break;
      case "/contact":
        console.log('You are at contact-us page');  
        break;
      default:
        console.log("You are at homepage");
        break;
    }
  }, [location.pathname]);

  return null; // This component doesn't render anything directly
};

export default PageStatus;
