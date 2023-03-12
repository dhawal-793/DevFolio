
import { FaLinkedin, FaGithub, FaTelegramPlane } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi";
// import { FaDiscord, FaTwitter } from "react-icons/fa"
import { BsFillPersonLinesFill } from "react-icons/bs";

import LinkedIn, { GitHub, GMail, Telegram ,Resume} from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhawal793/",
        icons: [<LinkedIn />, <FaLinkedin size={17} color="#0078d4" />]
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/dhawal-793",
        icons: [<GitHub />, <FaGithub size={17} color="#fff" />]
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:vijaydhawal9001@gmail.com",
        icons: [<GMail />, <HiOutlineMail size={17} color="#e53935" />]
    },

    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/DV_793",
        icons: [<Telegram />, <FaTelegramPlane size={17} color="#03A9F4" />]
    },
    {
        id: 5,
        name: "Resume",
        link: "/resume.pdf",
        icons: [<Resume/> ,<BsFillPersonLinesFill size={17} color="#5EEAC3" />],
        download: true
    }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icons: [<Twitter />, <FaTwitter size={17} color="#5EEAC3" />]
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icons: [<Discord />, <FaDiscord size={17} color="#5EEAC3" />]
    // },
];

export default contactInfo;