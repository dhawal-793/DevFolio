
import ReactJs, { Bash, Bootstrap, C, Canva, CPlusPlus, CSS, Doker, ExpressJS, FireBase, Git, GitHub, Heroku, HTML, Java, JQuery, JS, Kotlin, Kubernets, MaterialUI, MongoDB, MySQL, NextJs, NodeJS, PHP, PostGreSql, PostMan, Python, Redux, TailwindCSS, TS, VSCode } from "../components/SkilIcons";


const skills = [
    {
        id: 1,
        icon: <HTML />,
        name: "HTML",
        style: {
            shadow: "shadow-[#ca4828]",
            cover: "from-black to-[#ca4828]  rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 2,
        icon: <CSS />,
        name: "CSS",
        style: {
            shadow: "shadow-[#1d64c7]",
            cover: "from-black to-[#1d64c7] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 3,
        icon: <JS />,
        name: "JS",
        style: {
            shadow: "shadow-[#ffda53]",
            cover: "from-black to-[#ffda53] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 4,
        icon: <TS />,
        name: "TS",
        style: {
            shadow: "shadow-[#3481d3]",
            cover: "from-black to-[#3481d3] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 5,
        icon: <MongoDB />,
        name: "MongoDB",
        style: {
            shadow: "shadow-[#4FAA41]",
            cover: "from-black to-[#4FAA41] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 6,
        icon: <ExpressJS />,
        name: "Express Js",
        style: {
            shadow: "shadow-[#444444]",
            cover: "from-black to-[#444444] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    {
        id: 7,
        icon: <ReactJs />,
        name: "React",
        style: {
            shadow: "shadow-[#61DAFB]",
            cover: "from-black to-[#61DAFB] rounded-b-md",
            opacity: "opacity-80"
        }
    },

    {
        id: 8,

        icon: <NodeJS />,
        name: "Node Js",
        style: {
            shadow: "shadow-[#83CD27]",
            cover: "from-black to-[#83CD27] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 9,
        icon: <NextJs />,
        name: "NextJs",
        style: {
            shadow: "shadow-[#646464]",
            cover: "from-black to-[#646464] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 10,
        icon: <TailwindCSS />,
        name: "Tailwind",
        style: {
            shadow: "shadow-[#3D8FC6]",
            cover: "from-black to-[#3D8FC6] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 11,
        icon: <Bootstrap />,
        name: "Bootstrap",
        style: {
            shadow: "shadow-[#6610F2]",
            cover: "from-black to-[#6610F2] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    // {
    //     id: 12,
    //     icon: <SASS />,
    //     name: "SASS",
    //     style: {
    //         shadow: "shadow-[#CC6699]",
    //         cover: "from-black to-[#CC6699] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 13,
        icon: <MaterialUI />,
        name: "MaterialUI",
        style: {
            shadow: "shadow-[#1266A9]",
            cover: "from-black to-[#1266A9] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 14,
        icon: <MySQL />,
        name: "MySQL",
        style: {
            shadow: "shadow-[#00618A]",
            cover: "from-black to-[#00618A] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 33,
        icon: <PostGreSql />,
        name: "PostgreSql",
        style: {
            shadow: "shadow-[#336791]",
            cover: "from-black to-[#336791] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 15,
        icon: <FireBase />,
        name: "Firebase",
        style: {
            shadow: "shadow-[#d49a35]",
            cover: "from-black to-[#d49a35] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 16,
        icon: <Git />,
        name: "Git",
        style: {
            shadow: "shadow-[#F34F29]",
            cover: "from-black to-[#F34F29] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 17,
        icon: <GitHub />,
        name: "GitHub",
        style: {
            shadow: "shadow-[#5c5a5a]",
            cover: "from-black to-[#5c5a5a] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 18,
        icon: <PHP />,
        name: "PHP",
        style: {
            shadow: "shadow-[#9597c8]",
            cover: "from-black to-[#9597c8] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 19,
        icon: <CPlusPlus />,
        name: "C++",
        style: {
            shadow: "shadow-[#004482]",
            cover: "from-black to-[#004482] rounded-b-md",
            opacity: "opacity-80"
        }
    },
    {
        id: 20,
        icon: <Python />,
        name: "Python",
        style: {
            shadow: "shadow-[#ddbe4e]",
            cover: "from-black to-[#ddbe4e] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 21,
        icon: <Java />,
        name: "Java",
        style: {
            shadow: "shadow-[#E76F00]",
            cover: "from-black to-[#E76F00] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 22,
        icon: <C />,
        name: "C",
        style: {
            shadow: "shadow-[#3949AB]",
            cover: "from-black to-[#3949AB] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 23,
    //     icon: <Kotlin />,
    //     name: "Kotlin",
    //     style: {
    //         shadow: "shadow-[#B14F97]",
    //         cover: "from-black to-[#B14F97] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    // {
    //     id: 24,
    //     icon: <CSharp />,
    //     name: "C#",
    //     style: {
    //         shadow: "shadow-[#A179DC]",
    //         cover: "from-black to-[#A179DC] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 25,
        icon: <VSCode />,
        name: "VS Code",
        style: {
            shadow: "shadow-[#1D95E5]",
            cover: "from-black to-[#1D95E5] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 26,
        icon: <Bash />,
        name: "Bash",
        style: {
            shadow: "shadow-[#4dbc85]",
            cover: "from-black to-[#4dbc85] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 27,
    //     icon: <Redis />,
    //     name: "Redis",
    //     style: {
    //         shadow: "shadow-[#C6302B]",
    //         cover: "from-black to-[#C6302B] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 28,
        icon: <Redux />,
        name: "Redux",
        style: {
            shadow: "shadow-[#764ABC]",
            cover: "from-black to-[#764ABC] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 29,
        icon: <PostMan />,
        name: "PostMan",
        style: {
            shadow: "shadow-[#FF6C37]",
            cover: "from-black to-[#FF6C37] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 30,
        icon: <JQuery />,
        name: "JQuery",
        style: {
            shadow: "shadow-[#1266A9]",
            cover: "from-black to-[#1266A9] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    {
        id: 31,
        icon: <Doker />,
        name: "Doker",
        style: {
            shadow: "shadow-[#0091E2]",
            cover: "from-black to-[#0091E2] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 32,
    //     icon: <Kubernets />,
    //     name: "Kubernets",
    //     style: {
    //         shadow: "shadow-[#326DE6]",
    //         cover: "from-black to-[#326DE6] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },
    {
        id: 34,
        icon: <Canva />,
        name: "Canva",
        style: {
            shadow: "shadow-[#430098]",
            cover: "from-black to-[#430098] rounded-b-md",
            opacity: "opacity-80"

        }
    },
    // {
    //     id: 35,
    //     icon: <DotNet />,
    //     name: "DotNet Core",
    //     style: {
    //         shadow: "shadow-[#430098]",
    //         cover: "from-black to-[#430098] rounded-b-md",
    //         opacity: "opacity-80"

    //     }
    // },


]
export default skills;

