import { SiAboutDotMe } from 'react-icons/si';
import {HiOutlineDocumentText} from 'react-icons/hi'
import {AiFillProject} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'

export const SidebarLink = [
    {
        img:<SiAboutDotMe />,
        name:"Home",
        link:"/"
    },
    {
        img:<HiOutlineDocumentText />,
        name:"RESUME",
        link:"/resume"
    },
    {
        img:<AiFillProject />,
        name:"PORTFOLIO",
        link:"/portfolio/projects"
    },
    {
        img:<IoIosContact />,
        name:"CONTACT",
        link:"/contact"
    }
]