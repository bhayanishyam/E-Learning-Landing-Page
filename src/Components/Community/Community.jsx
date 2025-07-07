import image from "../../assets/banner-D9M2H9os.png"
import { motion } from "framer-motion"

export default function Community() {
    return (
        <section>

            <div className="container grid grid-cols-1 md:grid-cols-2 py-14 md:!p-24 gap-10 space-y-6 md:space-y-0">
                {/* text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex flex-col justify-center">
                    <div className="lg:max-w-[450px] space-y-4 text-center md:text-left">

                        <h1 className="text-3xl  md:text-4xl font-bold !leading-snug space-y-4">
                            Join Our Community to Start your Journey
                        </h1>
                        <p className=" text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis incidunt!</p>
                        <a href="#" className="primary-btn ">Join Now</a>
                    </div>
                </motion.div>
                {/* Image */}
                <div className="flex justify-center items-center drop-shadow-2xl">
                    <motion.img
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        src={image} className="w-[350px]" />
                </div>
            </div>

        </section>
    );
}
