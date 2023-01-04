import { FaLinkedin, FaGithub, HiOutlineMail, FaTelegramPlane, BsPersonLinesFill } from "./icons";

const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/dhawal-vijayvargiya-188683214/",
        icon: <FaLinkedin size={17} />,
        style: "hover:text-white hover:bg-[#0A66C2]"
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/dhawal-793",
        icon: <FaGithub size={17} />,
        style: "hover:text-[#E6ECF1] hover:bg-black"

    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:vijaydhawal9001@gmail.com",
        icon: <HiOutlineMail size={17} />,
        style: "hover:bg-white hover:text-[#EB4334]"

    },
    {
        id: 4,
        name: "Telegram",
        link: "https://t.me/DV_793",
        icon: <FaTelegramPlane size={17} />,
        style: "hover:text-white hover:bg-[#2FA2D8] "

    },
    {
        id: 5,
        name: "Resume",
        link: "/resume.pdf",
        icon: <BsPersonLinesFill size={17} />,
        style: "hover:bg-black hover:text-[#5EEAC5]",
        download: true
    }
];

export default contactInfo;