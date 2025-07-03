import BannerImage from "../../assets/education-loGlJHVh.png"
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookOpenReader } from "react-icons/fa6";
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion"

export default function Banner() {
    const data = [
        {
            id: 1,
            title: "100k online courses",
            icon: <FaBookOpenReader />,
            delay: 0.2
        },
        {
            id: 2,
            title: "Export Instruction",
            icon: <GrUserExpert />,
            delay: 0.3
        },
        {
            id: 3,
            title: "Lifetime Access",
            icon: <MdOutlineAccessTime />,
            delay: 0.4
        },
    ]
    return (
        <section className=''>
            <div className='container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0'>
                {/* Banner Image */}
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeInOut" }}
                        src={BannerImage} alt="" className="w-[350px] md:max-w-[450px] object-cover drop-shadow-xl " />
                </div>
                {/* Banner Text */}
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left space-y-12 ">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                            className="text-3xl md:text-4xl !leading-snug font-bold mb-10 ">The World's Landing Online Learning Platform</motion.h1>
                    </div>
                    <div className="flex flex-col gap-4">
                        {
                            data.map((item) => (

                                <motion.div
                                    variants={FadeUp(item.delay)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    key={item.id}
                                    viewport={{ once: true }}
                                    className="flex w-full bg-light p-4 md:p-6 justify-start items-center gap-4 rounded-xl font-semibold hover:!scale-105 hover:!bg-white hover:!shadow-xl duration-300">
                                    <div>{item.icon}</div>
                                    <div>{item.title}</div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </section>
    );
}
