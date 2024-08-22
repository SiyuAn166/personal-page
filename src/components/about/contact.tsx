import Link from "next/link"
import { GrLinkedin, GrGithub } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
export default function Contact() {
    return (
        <div className="flex text-xl gap-10">
            <Link href="https://www.linkedin.com/in/siyu-an-bc" target="_blank"
            className="text-blue-800 hover:text-blue-500 transition duration-300">
                <GrLinkedin />
            </Link>
            <Link href="https://www.github.com/SiyuAn166" target="_blank"
            className="text-black hover:text-stone-600 transition duration-300">
                <GrGithub />
            </Link>
            <Link href="mailto:siyu.an.bc@gmail.com"
            className="hover:text-blue-700 transition duration-300">
                <HiOutlineMail />
            </Link>
        </div>
    )
}