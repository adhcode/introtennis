'use client'

import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Modal from "./Modal"
import aboutimg from "@/public/about.png"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import ball1 from "@/public/ball1.png"
import ball2 from "@/public/ball2.png"



function About() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])
  return (
    <div className="flex flex-col  items-center mt-10 lg:mt-24">
       <div className="flex flex-col lg:items-center lg:align-top mb-10">
       <h2 className="text-[#3C4526] font-[700] lg:text-[24px] text-[16px]">About Our Program</h2>
       <Separator className="h-[2px] bg-[#B4FF00] w-[166px] mb-4"/>
       <p className="text-[#3C4526] font-[400] md:text-[16px] md:text-center text-start text-[14px] md:max-w-[808px] max-w-[343px] leading-[28px] ">Our Tennis Program for Kids in Alimosho and Environs is designed to introduce children aged 5-15 to the fundamentals of tennis in a supportive and enjoyable setting. Our experienced coaches focus on developing essential skills, promoting physical fitness, and fostering a love for the sport.</p>
       </div>
       
       <Image src={aboutimg} 
       className="w-[363px] h-[400px] object-cover object-left rounded-[32px]" alt='about' mt-10 />
      


       <div className="flex flex-col items-start pl-4 pr-4">
       <h2 className="text-[#3C4526] font-[700] md:text-[24px] text-[16px] mt-28 ">Why Choose Our Tennis Program?</h2>
       <Separator className="h-[2px] bg-[#B4FF00] md:w-[439px] w-[288px] md:mb-4 mb-4"/>
       <div className="flex flex-col lg:mt-10 mt-0 md:gap-[30px] gap-4  ">
       <div className="lg:flex flex flex-col md:gap-[120px] gap-8">
        <div className="max-w-[508px]">
        <h3 className="text-[#3C4526] font-[700] md:text-[16px] text-[14px] mb-4">Expert Coaching:</h3>
        <p className="text-[16px] font-[400] text-[#3C4526]"> Our coaches are experienced professionals dedicated to nurturing young talent and making learning tennis fun.</p>
        </div>
        <div className="max-w-[508px]">
        
        <h3 className="text-[#3C4526] font-[700] md:text-[16px] text-[14px] mb-4">Fitness and Health:</h3>
        <p className="text-[16px] font-[400] text-[#3C4526]">Tennis is a great way to keep kids active, healthy, and fit.</p>
        </div>
        
       </div>

       <div className="md:flex flex flex-col md:gap-[120px] gap-8 mb-8 ">
       <div className="max-w-[508px]">
       <h3 className="text-[#3C4526] mt-4 font-[700] md:text-[16px] text-[14px] mb-4">Social Skills:</h3>
        <p className="text-[16px] font-[400] text-[#3C4526]">Children will make new friends and learn valuable teamwork and communication skills.</p>
        </div>
        <div className="max-w-[508px]">
        <h3 className="text-[#3C4526] font-[700] md:text-[16px] text-[14px] mb-4">Skill Development:</h3>
        <p className="text-[16px] font-[400] text-[#3C4526]">We focus on developing essential motor skills and hand-eye coordination through engaging activities and drills.</p>
        </div>
       </div>
       </div>
       <div>
       <div className=" md:max-w-[1120px] gap-10 mt-10 hidden md:flex lg:block pr-4">
        <Image
        src="/wctp1.png"
        width={348}
        height={232}
        alt="our trainees" />
        <Image
        src="/wctp2.png"
        width={348}
        height={232}
        alt="our trainees" />
        <Image
        src="/wctp3.png"
        width={348}
        height={232}
        alt="our trainees" />
       </div>

       <div className="embla" ref={emblaRef}>
      <div className="embla__container">
      <Image
        src="/wctp1.png"
        width={300}
        height={232}
        alt="our trainees" className="embla__slide rounded-[12px]" />
        <Image
        src="/wctp2.png"
        width={300}
        height={232}
        alt="our trainees" className="embla__slide" />
        <Image
        src="/wctp3.png"
        width={300}
        height={232}
        alt="our trainees" className="embla__slide" />

      </div>
    </div>
       </div>
      

       <div className="flex mt-20 lg:h-[458px] gap-32 mb-20 ">
        <div className="flex flex-col justify-between">
        <h2 className="text-[#3C4526] font-[700] lg:text-[24px] text-[16px]">Program Details</h2>
        <Separator className="h-[2px] bg-[#B4FF00] lg:w-[204px] w-[136px] mb-4"/>
        <div>
            <h3 className="text-[#3C4526] font-[700] lg:text-[16px] text-[14px] mb-4">Age Group:</h3>
            <p className="text-[#3C4526] font-[400] lg:text-[16px] text-[14px]  mb-4">For children aged 5-15</p>
        </div>
        <div>
            <h3 className="text-[#3C4526] font-[700] lg:text-[16px] text-[14px] mb-4">Location:</h3>
            <p className="text-[#3C4526] font-[400] lg:text-[16px] text-[14px]  mb-4">Alimosho and surrounding areas</p>
        </div>
        <div>
            <h3 className="text-[#3C4526] font-[700] lg:text-[16px] text-[14px] mb-4">Schedule:</h3>
            <p className="text-[#3C4526] font-[400] lg:text-[16px] text-[14px]  mb-4">Sessions available on weekdays and weekends</p>
        </div>
        <div>
            <h3 className="text-[#3C4526] font-[700] lg:text-[16px] text-[14px] mb-4">Duration:</h3>
            <p className="text-[#3C4526] font-[400] lg:text-[16px] text-[14px]  mb-4">Each session lasts 1 hour</p>
        </div>
        </div>
        <Image
        src="/pd1.png"
        width={617}
        height={458}
        alt="program details" className="hidden md:block" />
       </div>

       <div className="h-[200px] bg-gradient-to-r from-[#445F04] to-[#8EC509] w-full lg:w-[1120px] lg:mb-48 mb-20   items-center justify-left lg:rounded-[32px] rounded-none relative pl-4 pr-0 flex ">
        <div className="flex items-left flex-col">
          <h2 className="text-[#FFFFFF] font-[700] lg:text-[24px] text-[16px] mb-4">Ready to Get Started?</h2>
          <p className="text-[#FFFFFF] lg:text-[14px] text-[12px] mb-4">Enroll Your Child Today!</p>

          <Modal />
        </div>
        <div className="">

        <Image src={ball1} className="absolute lg:top-16 top-[70px] right-1 lg:left-10 w-[102px] h-[107px]"
       
        alt="ball1" />

<Image src={ball2}className="absolute lg:top-10 bottom-[-40px] left-30 lg:right-10 w-[102px] scale-x-[-1] h-[107px]"
        
        alt="ball1" />
        </div>


       </div>
       
       </div>

       <div className="border-top border-[1px] w-full border-[#EDFFC2] h-[370px] pl-[10px] pr-[10px] lg:pl-[160px] lg:pr-[160px] ">
        <div className="border-l-[1px] border-[#EDFFC2] border-r-[1px] flex flex-col lg:justify-center lg:items-center justify-start pl-4">
          <div className="flex flex-col lg:items-center items-start mb-14 ">
          <h2 className="text-[#3C4526] font-[700] lg:text-[24px] mt-10 text-16px">Contact Information</h2>
          <Separator className="h-[2px] bg-[#B4FF00] lg:w-[264px] w-[171px] mb-2"/>
          <p className="text-[16px] font-[400]">For any inquiries, feel free to contact us at:</p>
          </div>

          <div className="lg:flex flex flex-col justify-between lg:gap-28 gap-2 lg:mb-20 mb-8">
            <div>
            <h2 className="text-[#3C4526] font-[700] text-[16px] lg:mb-4 mb-2">Phone Number:</h2>
            <p className="font-[400] text-[16px] text-[#3C4526]">+234 800 123 4567</p>
            </div>
            <div>
            <h2 className="text-[#3C4526] font-[700] text-[16px] lg:mb-4 mb-2">Email Address:</h2>
            <p className="font-[400] text-[16px] text-[#3C4526]">info@introtennis.ng</p>
            </div>
            <div>
            <h2 className="text-[#3C4526] font-[700] text-[16px] lg:mb-4 mb-2">Address</h2>
            <p className="font-[400] text-[16px] text-[#3C4526]">LKJ Estate Igando</p>
            </div>
          </div>

        </div>

       </div>

    </div>
  )
}

export default About