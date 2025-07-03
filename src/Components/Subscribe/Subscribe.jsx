import { FaBell } from "react-icons/fa6";
import bgImage from "../../assets/bg-DbMCSbvL.png"
import {motion} from "framer-motion"

const bgStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}
export default function Subscribe() {
    return (
        <section>
            <div style={bgStyle} className="container py-24 md:py-48 ">
                <div className="flex flex-col justify-center">
                    <motion.div
                    initial={{opacity:0, scale:0.4}}
                    whileInView={{opacity : 1, scale:1}}
                    transition={{duration:0.4}}
                     className="text-center space-y-4 max-w-[300px] lg:max-w-[450px] mx-auto">
                        <h1 className="text-2xl lg:text-4xl !leading-snug font-bold ">
                            450K+ Students are learning from us
                        </h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iusto minima</p>
                        <a className="primary-btn inline-flex items-center !mt-8 gap-4 group">Subscribe Now
                            <FaBell className="group-hover:text-lg group-hover:animate-bounce duration-200" /></a>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
