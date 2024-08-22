import Link from "next/link"
import { GrLinkedin, GrGithub } from "react-icons/gr"
import { HiOutlineMail } from "react-icons/hi"
export default function Contact() {
    return (
        <div className="flex text-xl gap-10">
            <Link href="https://www.linkedin.com/in/siyu-an-bc" target="_blank"
            className="text-blue-800 dark:text-blue-500 hover:text-blue-500 dark:hover:text-blue-300 transition duration-300">
                <GrLinkedin />
            </Link>
            <Link href="https://www.github.com/SiyuAn166" target="_blank"
            className="text-black dark:text-white hover:text-stone-600 dark:hover:text-blue-300 transition duration-300">
                <GrGithub />
            </Link>
            <Link href="mailto:siyu.an.bc@gmail.com"
            className="hover:text-blue-700 dark:hover:text-blue-300 transition duration-300">
                <HiOutlineMail />
            </Link>
        </div>
    )
}