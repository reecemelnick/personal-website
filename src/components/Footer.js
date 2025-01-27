import '../styles/Footer.css'
import '../content/FooterContent.js'
import { footerContent } from '../content/FooterContent.js';

function Footer() {
  return (
    <div className="footer">
      <p>{footerContent.phone}</p>
      <p>{footerContent.email}</p>
    </div>
  );
}

export default Footer;