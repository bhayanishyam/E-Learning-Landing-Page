
import { BiSupport } from 'react-icons/bi';
import { CiMobile3 } from 'react-icons/ci';
import { IoMdHappy } from 'react-icons/io';
import { IoPulseOutline } from 'react-icons/io5';
import { RiComputerLine } from 'react-icons/ri';
import { TbWorldWww } from 'react-icons/tb';
import { motion } from "framer-motion"

export default function Services() {
    const servicesData = [
        {
            id: 1,
            title: "Web Development",
            link: "#",
            icon: <TbWorldWww />,
            delay: 0.2
        },
        {
            id: 2,
            title: "Mobile Development",
            link: "#",
            icon: <CiMobile3 />,
            delay: 0.2
        },
        {
            id: 3,
            title: "Software Development",
            link: "#",
            icon: <RiComputerLine />,
            delay: 0.4
        },
        {
            id: 4,
            title: "Satisfied Client",
            link: "#",
            icon: <IoMdHappy />,
            delay: 0.5
        },
        {
            id: 5,
            title: "SEO Optimized",
            link: "#",
            icon: <IoPulseOutline />,
            delay: 0.6
        },
        {
            id: 6,
            title: "24/7 support",
            link: "#",
            icon: <BiSupport />,
            delay: 0.7
        },

    ]

    return (
        <section className='bg-white'>
            <div className='container pb-14 pt-16'>
                {/* title */}
                <h1 className='text-4xl font-bold text-left pb-10'>Services We Provide</h1>
                {/* service cards */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8'>

                    {
                        servicesData.map((item) => (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: item.delay-0.1, ease: "easeInOut" }}
                                key={item.id} className='bg-light rounded-3xl py-7 px-4 gap-4 flex flex-col justify-center items-center hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl'>
                                <div className='text-4xl mb-4'>{item.icon}</div>
                                <h1 className='text-lx font-semibold text-center px-3'>{item.title}</h1>
                            </motion.div>
                        ))

                    }
                </div>
            </div>

        </section>
    );
}
