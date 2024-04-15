
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-teal-200  ">
  <aside>
    
    <p className="font-bold">
      Luxury estate Ltd. <br/>Providing reliable tech since 1992
    </p> 
    <p>Copyright © 2024 - All right reserved</p>
  </aside> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      
      <FaTwitter></FaTwitter>
      <FaYoutube></FaYoutube>
      <FaFacebook></FaFacebook>
    </div>
  </nav>
</footer>
    );
};

export default Footer;