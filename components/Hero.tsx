

import Navbar from "./navbar/Navbar"
import { Separator } from "@/components/ui/separator"
import Modal from "./Modal"
import Image from 'next/image'
import hero from '@/public/heroimage.png'



function Hero() {
  return (

    <div className=" ">
        
         <Navbar />
         <div className="md:pl-24 pl-4 pb-48 mt-20 lg:flex">
          <div>
            <h2 className="text-[#3C4526] md:text-[14px] text-[12px]">
            Serve Up Fun and Fitness:
           

            </h2>
            <Separator className="md:h-[4px] h-[2px] bg-[#B4FF00] w-[158px] lg:w-[185px] mb-4"/>
            <h1 className="lg:text-[40px] text-[24px] text-[#3C4526] max-w-[343px] lg:max-w-[522px] font-[700] leading-[40px] mb-4">
            Join Our Tennis Program for Kids in Alimosho and Environs!
            </h1>
            <h3 className="text-[#3C4526] md:text-[20px] text-[12px]  font-[400] lg:max-w-[658px] max-w-[343px]  mb-8">
            Get your child active and engaged in the exciting world of tennis with expert coaching and a fun-filled environment.
            </h3>


            <Modal />
            </div>
            <div className='relative mt-10 lg:mt-[-60px]'>

              <div className='w-[195.63px] lg:w-[300px] lg:h-[300px] h-[195.21px] rounded-full bg-[#F1F7E3] absolute -z-20'>

              </div>
              <div className='w-[195.63px] h-[195.21px] lg:w-[300px] lg:h-[300px] rounded-full bg-[#F1F7E3] absolute top-[120px] right-5 -z-20'>

              </div>

              <Image src={hero}
              className='w-[343px] lg:w-[526px] h-[205.62px] lg:h-[316px] absolute top-10 right-2 lg:top-0 lg:right-0 lg:static'
              alt='hero' />
            </div>

         </div>
        
    </div>
  )
}

export default Hero