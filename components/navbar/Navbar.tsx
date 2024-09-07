import { AlertDialog } from "@radix-ui/react-alert-dialog"
import Logo from "./Logo"
import Modal from "../Modal"


function Navbar() {
  return (
    <div className="flex items-center justify-between max-w-full md:py-12 md:px-24 mt-4  px-4 ">
        <Logo />
       
        <Modal />
    </div>
  )
}

export default Navbar