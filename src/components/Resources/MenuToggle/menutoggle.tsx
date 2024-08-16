import * as React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import Link from "next/link";

const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);

export const ListToggle = ({ toggle }: any) => (
    <button onClick={toggle} className="absolute outline-none border-none cursor-pointer top-[17px] left-[29px] w-[50px] h-[50px] rounded-[50%] bg-white pl-[0.90rem] pt-[0.325rem]">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface Props {
    components: {
        index: number,
        name: string,
        href: string,
        icon?: string
    }
    key: number
}

const pages = [
    {
        index: 0,
        name: 'Dashboard',
        href: 'https://taynan.dev/home'
    },
];

const components = [
    {
        index: 0,
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/taynan-hott/',
        icon: '/image/logo/linkedin.png'
    },
    {
        index: 1,
        name: 'WhatsApp',
        href: 'https://wa.me/+5531984145023',
        icon: '/image/logo/whatsapp.png'
    },
    {
        index: 2,
        name: 'E-mail',
        href: 'mailto:taynanzhott@gmail.com',
        icon: '/image/logo/email.png'
    },
    {
        index: 3,
        name: 'GitHub',
        href: 'https://github.com/taynanhott',
        icon: '/image/logo/github.png'
    },
];

const project = [
    {
        index: 0,
        name: 'Reconhecimento',
        href: 'https://facial.taynan.dev',
        icon: '/image/reconhecimento.jpg'
    },
    {
        index: 1,
        name: 'Previsão',
        href: 'https://weather.taynan.dev',
        icon: '/image/clima.png'
    },
    {
        index: 2,
        name: 'Gerenciador',
        href: 'https://financial.taynan.dev',
        icon: '/image/todolist.jpg'
    },
];

export const MenuItem = ({ components }: Props) => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer mb-6"
        >
            <a href={components.href} target="_blank" className="hover:border-b text-gray-900 hover:border-gray-900 flex items-center text-xl">
                {components.icon !== undefined ?
                    <Image
                        src={components.icon}
                        width={25}
                        height={25}
                        alt=""
                        className="mr-2"
                    />
                    :
                    <></>
                }
                {components.name}
            </a>
        </motion.li>
    );
};

const variantes = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => (
    <>
        <motion.ul className="top-16 w-56 p-6 mb-2 absolute" variants={variantes}>
            <motion.li
                variants={variants}
                className="flex items-center text-lg font-bold mb-4 text-gray-900"
            >Contatos</motion.li>
            {components.map(component => (
                <MenuItem components={component} key={component.index} />
            ))}
        </motion.ul>

        <motion.ul className="top-80 w-56 p-6 mb-2 absolute" variants={variantes}>
            <motion.li
                variants={variants}
                className="flex items-center text-lg font-bold mb-4 text-gray-900"
            >Projetos</motion.li>
            {project.map(project => (
                <MenuItem components={project} key={project.index} />
            ))}
        </motion.ul>
    </>
);

