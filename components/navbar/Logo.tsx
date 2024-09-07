import Image from 'next/image'
import logo from '@/public/logo.png'

function Logo() {
    return (
      <div className=" w-[38px] h-[32px] lg:w-[86px] lg:h-[72px]">
        <Image src= {logo}
        
        alt='logo'
/>

      </div>
    )
  }
  
export default Logo

