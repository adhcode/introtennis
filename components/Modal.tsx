import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Separator } from "@radix-ui/react-separator"
  import { Input } from "./ui/input"
import ModalForm from "./ModalForm"
import { ScrollArea } from "@/components/ui/scroll-area"
  

function Modal() {
  return (
   
    <AlertDialog >
      
    <AlertDialogTrigger className="bg-[#B4FF00] w-[127px]  md:pl-[80px] md:pt-[14px] md:pr-[80px] h-[40px] flex items-center justify-center md:pb-[14px] rounded-[12px] md:w-[252px] text-[#3C4526] md:font-[700] text-[14px] md:text-[16px]">Enroll Now</AlertDialogTrigger>
   
    <AlertDialogContent className="w-[390px] lg:w-[674px] h-full bg-[#ffffff]">
    <ScrollArea className="h-full w-full">
      <AlertDialogHeader>
        <div className="flex justify-between">
          <div>
        <AlertDialogTitle className="mt-[100px] text-[24px] w-[291px] text-left">Enroll Your Child Today</AlertDialogTitle>
        <Separator className="h-[2px] bg-[#B4FF00] lg:w-[263px] w-[291px] mb-4"/>
        </div>
        <AlertDialogCancel className="w-[40px] bg-[#EDFFC2] text-xl font-[400]">X</AlertDialogCancel>
        </div>
        <p className="text-left text-[14px] leading-[20px]">Fill out the form below to enroll your child in our Tennis Program for Kids in Alimosho and Environs. We can't wait to see your child on the court!</p>

      <ModalForm />
        <AlertDialogDescription>
          
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        
        
      </AlertDialogFooter>
      </ScrollArea>
    </AlertDialogContent>
   
  </AlertDialog>
  
  )
}

export default Modal