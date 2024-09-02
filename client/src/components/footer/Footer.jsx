import "./footer.css";
import linkedIn from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import github from '../../assets/github.svg';
import facebook from '../../assets/facebook.svg';

const Divider = () => {
  return <div className="divider"></div>;
};

const Footer = () => {
  return (
    <footer>
      <div className="footer_upper_section">
        <div className="footer_left">
          <h2>Blogging Platform</h2>
          <p>
            It is a powerful tool for sharing ideas, experiences, and knowledge with a global audience. It serves as a platform for personal expression and professional communication.
          </p>
          <div className="footer_logo">
              <img src={linkedIn} alt="linkedin_icon" />
              <img src={twitter} alt="twitter_icon" />
              <img src={facebook} alt="facebook_icon" />
              <img src={github} alt="github_icon" />
          </div>
        </div>  
        <div className="footer_sec1">
          <h3>Product</h3>
          <ul>
            <li>Overview</li>
            <li>Features</li>
            <li>Solution</li>
            <li>Realeases</li>
          </ul>
        </div>
        <div className="footer_sec2">
          <h3>Company</h3>
          <ul>
            <li>AboutUs</li>
            <li>Careers</li>
            <li>Media</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer_sec3">
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help Center</li>
          </ul>
        </div>
        <div className="footer_sec4">
          <h3>Social</h3>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
        
      <Divider />
      
      <div className="footer_lower_section">
        <p>©️ 2024 Blogging. All right reserved</p> 
        <div className="footer_privacy">
          <p>Privacy Policy</p>
          <p>Terms of use</p>
        </div>
      </div>
    </footer>  
  );
};

export default Footer;
