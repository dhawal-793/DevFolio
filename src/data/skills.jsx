import {
    SiHtml5, SiCss3, SiJavascript, SiTypescript,
    SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiSass, SiMaterialui, SiChakraui,
    SiMysql, SiFirebase,
    SiGit, SiGithub, SiC, SiCplusplus, SiPython, SiJava, SiKotlin, SiPhp,
    SiGnubash, SiHeroku, SiNetlify, SiLinode, SiVisualstudiocode,

} from "react-icons/si"


const skills = [
    {
        id: 1,
        // icon: "devicon-html5-plain colored",
        icon: <SiHtml5 size={30} className="text-[#ff3300] z-20" />,
        name: "HTML",
        style: {
            shadow: "shadow-[#ca4828]",
            cover: "from-black to-[#ca4828]  rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 2,
        // icon: "devicon-css3-plain colored",
        icon: <SiCss3 size={30} className="text-[#006aff] z-20" />,
        name: "CSS",
        style: {
            shadow: "shadow-[#1d64c7]",
            cover: "from-black to-[#1d64c7] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 3,
        // icon: "devicon-javascript-plain colored",
        icon: <SiJavascript size={30} className="text-[#ffc800] z-20" />,
        name: "JS",
        style: {
            shadow: "shadow-[#ffda53]",
            cover: "from-black to-[#ffda53] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    // {
    //     id: 4,
    //     // icon: "devicon-typescript-plain colored",
    //     icon: <SiTypescript size={30} className="text-[#007bff] z-20" />,
    //     name: "TS",
    //     style: {
    //         shadow: "shadow-[#3481d3]",
    //         cover: "from-black to-[#3481d3] rounded-b-md",
    //         opacity: "opacity-80"
    //     }
    // },
    {
        id: 5,
        // icon: "devicon-mongodb-plain colored",
        icon: <SiMongodb size={30} className="text-[#22ff00] z-20" />,
        name: "MongoDB",
        style: {
            shadow: "shadow-[#4FAA41]",
            cover: "from-black to-[#4FAA41] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 6,
        // icon: "devicon-express-original colored",
        icon: <SiExpress size={30} className="text-[#808080] z-20" />,
        name: "Express Js",
        style: {
            shadow: "shadow-[#444444]",
            cover: "from-black to-[#444444] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    {
        id: 7,
        // icon: "devicon-react-original colored",
        icon: <SiReact size={30} className="text-[#00c8ff] z-20" />,
        name: "React",
        style: {
            shadow: "shadow-[#61DAFB]",
            cover: "from-black to-[#61DAFB] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    {
        id: 8,
        // icon: "devicon-nodejs-plain colored",
        icon: <SiNodedotjs size={30} className="text-[#8cff00] z-20" />,
        name: "Node Js",
        style: {
            shadow: "shadow-[#83CD27]",
            cover: "from-black to-[#83CD27] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        // icon: "devicon-nextjs-plain colored",
        icon: <SiNextdotjs size={30} className="text-[#c1b7b7] z-20" />,
        name: "NextJs",
        style: {
            shadow: "shadow-[#646464]",
            cover: "from-black to-[#646464] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 10,
        // icon: "devicon-tailwindcss-plain colored",
        icon: <SiTailwindcss size={30} className="text-[#0099ff] z-20" />,
        name: "Tailwind",
        style: {
            shadow: "shadow-[#3D8FC6]",
            cover: "from-black to-[#3D8FC6] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 11,
        // icon: "devicon-bootstrap-plain colored",
        icon: <SiBootstrap size={30} className="text-[#6600ff] z-20" />,
        name: "Bootstrap",
        style: {
            shadow: "shadow-[#59407F]",
            cover: "from-black to-[#59407F] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    // {
    //     id: 12,
    //     // icon: "devicon-sass-plain colored",
    //     icon: <SiSass size={30} className="text-[#ff0080] z-20" />,
    //     name: "SASS",
    //     style: {
    //         shadow: "shadow-[#CC6699]",
    //         cover: "from-black to-[#CC6699] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 13,
    //     // icon: "devicon-materialui-plain colored",
    //     icon: <SiMaterialui size={30} className="text-[#00c8ff] z-20" />,
    //     name: "MaterialUI",
    //     style: {
    //         shadow: "shadow-[#1FA6CA]",
    //         cover: "from-black to-[#1FA6CA] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 14,
    //     // icon: "devicon-materialui-plain colored",
    //     icon: <SiChakraui size={30} className="text-[#00f7ff] z-20" />,
    //     name: "ChakraUI",
    //     style: {
    //         shadow: "shadow-[#63C0C3]",
    //         cover: "from-black to-[#63C0C3] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 14,
        // icon: "devicon-mysql-plain colored",
        icon: <SiMysql size={30} className="text-[#00b3ff] z-20" />,
        name: "MySQL",
        style: {
            shadow: "shadow-[#00618A]",
            cover: "from-black to-[#00618A] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 23,
    //     // icon: "devicon-firebase-plain colored text-green-800",
    //     icon: <SiFirebase size={30} className="text-[#F29C0B] z-20" />,
    //     name: "Firebase",
    //     style: {
    //         shadow: "shadow-[#d49a35]",
    //         cover: "from-black to-[#d49a35] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 15,
        // icon: "devicon-git-plain colored",
        icon: <SiGit size={30} className="text-[#ff2f00] z-20" />,
        name: "Git",
        style: {
            shadow: "shadow-[#F34F29]",
            cover: "from-black to-[#F34F29] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 16,
        // icon: "devicon-github-plain colored",
        icon: <SiGithub size={30} className="text-[#bdbdbd] z-20" />,
        name: "GitHub",
        style: {
            shadow: "shadow-[#5c5a5a]",
            cover: "from-black to-[#5c5a5a] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 17,
        // icon: "devicon-c-plain colored",
        icon: <SiC size={30} className="text-[#0091ff] z-20" />,
        name: "C",
        style: {
            shadow: "shadow-[#2b7ab5]",
            cover: "from-black to-[#2b7ab5] rounded-b-md",
            opacity: "opacity-80"

        }
    },


    {
        id: 18,
        // icon: "devicon-cplusplus-plain colored",
        icon: <SiCplusplus size={30} className="text-[#ff005d] z-20" />,
        name: "C++",
        style: {
            shadow: "shadow-[#b62c5f]",
            cover: "from-black to-[#b62c5f] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 19,
        //     icon: "devicon-python-plain colored",
        icon: <SiPython size={30} className="text-[#ffc800] z-20" />,
        name: "Python",
        style: {
            shadow: "shadow-[#ddbe4e]",
            cover: "from-black to-[#ddbe4e] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 20,
        // icon: "devicon-java-plain colored",
        icon: <SiJava size={30} className="text-[#ff8c00] z-20" />,
        name: "Java",
        style: {
            shadow: "shadow-[#d19040]",
            cover: "from-black to-[#d19040] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 22,
    //     // icon: "devicon-kotlin-plain colored ",
    //     icon: <SiKotlin size={30} className="text-[#D67154] z-20" />,
    //     name: "Kotlin",
    //     style: {
    //         shadow: "shadow-[#C5599F]",
    //         cover: "from-black to-[#C5599F] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 22,
        // icon: "devicon-php-plain colored ",
        icon: <SiPhp size={30} className="text-[#696dd0] z-20" />,
        name: "PHP",
        style: {
            shadow: "shadow-[#9597c8]",
            cover: "from-black to-[#9597c8] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 23,
    //     // icon: "devicon-bash-plain colored text-green-800",
    //     icon: <SiGnubash size={30} className="text-[#01ff23] z-20" />,
    //     name: "Bash",
    //     style: {
    //         shadow: "shadow-[#4dbc85]",
    //         cover: "from-black to-[#4dbc85] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 23,
    //     // icon: "devicon-heroku-plain colored text-green-800",
    //     icon: <SiHeroku size={30} className="text-[#3f3898] z-20" />,
    //     name: "Heroku",
    //     style: {
    //         shadow: "shadow-[#8480af]",
    //         cover: "from-black to-[#8480af] rounded-b-md",
    //         opacity: "opacity-80"

    //     }

    // },
    // {
    //     id: 23,
    //     // icon: "devicon-bash-plain colored text-green-800",
    //     icon: <SiNetlify size={30} className="text-[#3CADB4] z-20" />,
    //     name: "Netlify",
    //     style: {
    //         shadow: "shadow-[#63a3a8]",
    //         cover: "from-black to-[#63a3a8] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 23,
    //     // icon: "devicon-linode-plain colored text-green-800",
    //     icon: <SiLinode size={30} className="text-[#00ff80] z-20" />,
    //     name: "Linode",
    //     style: {
    //         shadow: "shadow-[#4dbc85]",
    //         cover: "from-black to-[#4dbc85] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 23,
    //     // icon: "devicon-linode-plain colored text-green-800",
    //     icon: <SiVisualstudiocode size={30} className="text-[#0099ff] z-20" />,
    //     name: "VS Code",
    //     style: {
    //         shadow: "shadow-[#1D95E5]",
    //         cover: "from-black to-[#1D95E5] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },

]
export default skills;

