import { useContext } from "react";
import UserContext from "./utils/UserContext";


const Footer = () => {
  const { user} =useContext(UserContext)
 // console.log(user);
  return (
    <>
      <h4 className="my-4">Made with &#10084; by {user.name} </h4>
      
    </>
  );
};

export default Footer;
