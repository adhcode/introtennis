
import { Button } from "./ui/button"
import Image from "next/image"

interface ButtonProps {
    isLoading: boolean,
    className?: string,
    children: React.ReactNode
}

const SubmitButton = ({ isLoading , className, children}: ButtonProps) =>  {
  return (
    <Button type="submit" disabled={isLoading} className={className ?? "bg-[#B4FF00] w-full text-[#3C4526] font-[700]"}>
        {isLoading ? (
            <div className="flex items-center gap-4">
               <Image
               src="/public/loader.svg"
               alt="loader"
               width={24}
               height={24}
               className="animate-spin"
               />
               Loading...

            </div>
        ): children}
        </Button>
  )
}

export default SubmitButton