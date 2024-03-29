import Links from "../Links";
import { IoShareSocialOutline } from "react-icons/io5";

function Contact() {
  return (
    <section id="contact" className="contact-full-wrapper">
      <h2>
        <hr></hr>Contact
      </h2>
      <div className="contact-inner-wrapper">
        <IoShareSocialOutline id="connect-icon" />
        <hr></hr>
        <Links />
      </div>
    </section>
  );
}

export default Contact;
