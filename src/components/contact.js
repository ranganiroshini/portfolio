
import { ImLinkedin, ImGithub } from "react-icons/im";
import { SiMicrosoftoutlook, SiBlogger, SiMedium } from "react-icons/si";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="item">

        {/* Outlook Email */}
        <a
          className="gm"
          href="mailto:roshiniranganii@outlook.com"
        >
          <SiMicrosoftoutlook size={"30px"} />
        </a>

        {/* LinkedIn */}
        <a
          className="li"
          href="https://www.linkedin.com/in/roshini-rangani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImLinkedin size={"30px"} />
        </a>

        {/* GitHub */}
        <a
          className="gb"
          href="https://github.com/ranganiroshini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ImGithub size={"30px"} />
        </a>

        {/* Blogger */}
        <a
          className="wp"
          href="https://roshinirangani.blogspot.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBlogger size={"30px"} />
        </a>

        {/* Medium */}
        <a
          className="wp"
          href="https://medium.com/@ranganiroshini4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMedium size={"30px"} />
        </a>

      </div>

      <p style={{ margin: "2%" }}>
        COPYRIGHT © {new Date().getFullYear()} Roshini Rangani
      </p>
    </div>
  );
};

export default Contact;
