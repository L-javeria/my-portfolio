import React from "react";
import "./social.css";
import { FaLinkedinIn, FaRegFileAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { FaFileAlt } from "react-icons/fa";

const SocialContact = () => {
  return (
    <div>
      <div className="card">
        <a className="social-link4 w-[20%]" href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn/>
        </a>
        
        <a className="social-link2 w-[20%]" href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
         <FaGithub/>
        </a>
        
        <a className="social-link3 w-[15%]" href="https://yourresume.com" target="_blank" rel="noopener noreferrer">
        <FaRegFileAlt/>
        </a>
        
        <a className="social-link5 w-[20%]" href="mailto:youremail@example.com" target="_blank" rel="noopener noreferrer">
          <HiOutlineMail />
        </a>
      </div>
    </div>
  );
};

export default SocialContact;