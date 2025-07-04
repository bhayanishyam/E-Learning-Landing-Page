import { IoMdMenu } from "react-icons/io";
import {motion} from "framer-motion"


export default function Navbar() {
    const NavbarMenu = [
        {
            id: 1,
            title: "Home",
            path: "/"
        },
        {
            id: 2,
            title: "Services",
            path: "#"
        },
        {
            id: 3,
            title: "About Us",
            path: "#"
        },
        {
            id: 4,
            title: "Our Team",
            path: "/"
        },
        {
            id: 5,
            title: "Contact Us",
            path: "#"
        },


    ]
    return (
        <nav className="relative z-20">
            <motion.div
                initial={{opacity : 0, y : -50}}
                animate={{opacity:1, y:0}}
                transition={{duration : 0.6, delay : 0.4, ease : "easeInOut"}}
             className='container py-10 flex justify-between items-center'>
                {/* Logo section */}
                <div className='font-bold text-2xl'>
                    <h1>The coding Journey</h1>
                </div>
                {/* Menu section */}
                <div className='hidden lg:block'>
                    <ul className='flex items-center gap-3'>
                        {
                            NavbarMenu.map((menu) =>
                                <li key={menu.id}>
                                    <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                                        <div className='w-2 h-2 bg-sec rounded-full absolute mr-2 left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden'></div>
                                        {menu.title}</a>
                                </li>
                            )
                        }
                        <button className='primary-btn'>Sign In</button>
                    </ul>
                </div>
                {/* Mobile Hamburger menu section */}
                <div className="lg:hidden">
                    <IoMdMenu className='text-4xl' />
                </div>
            </motion.div>

        </nav>
    );
}
