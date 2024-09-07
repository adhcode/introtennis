'use client'

import uviseLogo from "@/public/uviselogo.png"
import howitworkLogo from "@/public/howitwork.png"
import wealfitLogo from "@/public/wealfitlogo.png"
import Image from "next/image";
import { motion } from "framer-motion"


export const LogoTicker = () => {
    return <div className="bg-white ">
     <div>
        <div className="mt-[130px] lg:mt-[-130px] pl-4">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div className="flex gap-14 flex-none justify-center items-center" animate={{
                translateX: "-100%",
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
            }}
            >
                
                <Image src={howitworkLogo} alt="howitworks Logo" className="lg:h-[100px] h-[60px] w-auto" />
               
                <Image src={wealfitLogo} alt="WealFit Logo" className="lg:h-[120px] h-[80px] w-auto"  />
               
                <Image src={uviseLogo} alt="WealFit Logo" className="lg:h-[30px] h-[20px]  w-auto" />
            </motion.div>
            </div>
        </div>
     </div>
    </div>;
};