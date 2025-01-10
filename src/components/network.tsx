import React from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/network.css"

const networkLinks = [
    {
        "link": "https://www.instagram.com/luizzsoaress123",
        "name": "Instagram",
        "icon": <FaInstagram />
    },
    {
        "link": "https://x.com/luizzsoares21",
        "name": "Space-X",
        "icon": <FaXTwitter />
    },
    {
        "link": "https://www.linkedin.com/in/luiz-ernandes-soares/",
        "name": "Linkedin",
        "icon": <FaLinkedin />
    },
    {
        "link": "https://github.com/LuizSoares1",
        "name": "Github",
        "icon": <FaGithub />
    }
]

const Network: React.FC = () => {

  return (
    <section className="networkContainer">
      <h1>Me siga em minhas redes:</h1>
      <div className="socialNetworkList">
        {networkLinks.map((e) => (
            <a href={e.link} className="networkIcons" id={e.name} key={e.name}>
                {e.icon}
                <span>{e.name}</span>
            </a>
        ))}
      </div>
    </section>
  );
};

export default Network;
