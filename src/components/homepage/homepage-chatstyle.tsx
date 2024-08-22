import classNames from "classnames"
import { Avatar, Button } from "@nextui-org/react"
import Link from "next/link"
import { IoSend } from "react-icons/io5";
import Contact from "../about/contact";


export default function HomePageChatStyle() {
    return (
        <div className={classNames(
            "relative",
            "w-full md:w-4/5",
            "animate-fade-up",
            "h-[92vh]",
        )}>

            <div className={classNames(
                "absolute",
                "flex flex-col items-center",
                "top-[3vh]",
                "md:left-1/3",
            )}>

                <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 overflow-y-auto flex flex-col">
                    <div className="flex flex-col items-center gap-2 border-b border-gray-300">
                        <a target="_blank" href="https://www.linkedin.com/in/siyu-an-bc" className="transition-transform duration-200 hover:scale-110 drop-shadow-lg">
                            <Avatar src="sa.png" size="lg" isBordered color="primary" className="drop-shadow-md " />
                        </a>
                        <p className="text-gray-600 drop-shadow-lg">Siyu An</p>
                        
                    </div>
                    <div className="flex flex-col gap-5 my-2 min-h-[50vh] text-md md:text-xl">
                        <div className="bg-stone-200 p-4 rounded-3xl max-w-lg drop-shadow-md">
                            Hello! Welcome to my personal page!
                        </div>
                        <div className="bg-stone-200 p-4 rounded-3xl max-w-xs drop-shadow-md">
                            My name is Siyu An.
                        </div>
                        <div className="bg-stone-200 p-4 rounded-3xl max-w-lg drop-shadow-md">
                            I am Software Engineer, Data Engineer and Web Developer.
                        </div>

                        <div className="flex bg-stone-200 p-4 rounded-3xl max-w-lg drop-shadow-md">
                            <div>
                                Discover more <Link href="/about" className="text-blue-500 underline hover:text-blue-700 transition duration-300">about me</Link>.
                            </div>
                        </div>

                    </div>
                    <div className="flex p-2 border-t border-gray-300">
                        <input
                            type="text"
                            placeholder="Type a message..."
                            className="flex-1 p-2 rounded-lg border border-gray-300"
                        />
                        <Button radius="full" isIconOnly className="ml-2 bg-blue-500 text-white">
                            <IoSend />
                        </Button>
                    </div>
                </div>

                <div className="md:hidden mt-20">
                    <Contact />
                </div>
            </div>

        </div>
    )
}