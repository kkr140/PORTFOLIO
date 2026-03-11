import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:kirankumarreddy74161@gmail.com" data-cursor="disable">
                kirankumarreddy74161@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Computer Science and Engineering (CSE) at KL University (2023 - 2027)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://api.whatsapp.com/qr/POWDIQ5KEKTSO1?autoload=1&app_absent=0"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/kiran-kumar-reddy-yadamakanti-872695286/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/kiran39220"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/vreditors04/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            <a
              href="https://www.youtube.com/@editing-t7t/featured"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
