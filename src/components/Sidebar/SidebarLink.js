import { AiOutlineHome } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import {HiOutlineDocumentText} from 'react-icons/hi'
import {AiFillProject} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'

export const SidebarLink = [
    {
        img:<AiOutlineHome />,
        name:"HOME",
        link:""
    },
    {
        img:<SiAboutDotMe />,
        name:"ABOUT",
        link:"/aboutme"
    },
    {
        img:<HiOutlineDocumentText />,
        name:"RESUME",
        link:"/resume"
    },
    {
        img:<AiFillProject />,
        name:"PORTFOLIO",
        link:"/portfolio"
    },
    {
        img:<IoIosContact />,
        name:"CONTACT",
        link:"/contact"
    }
]