'use client'
import classNames from "classnames"

export default function HomePage(){
    return (
        <div className={classNames(
            "w-full md:w-2/5 h-screen relative",
            "animate-fade-up",
        )}>
            <div className={classNames(
                "absolute",
                "flex flex-col gap-8",
                "top-[20vh]",
                "left-5 md:left-0"
            )}>
                <div>
                    <span className="text-3xl md:text-6xl font-light text-blue-600">Hi, my name is Siyu An.</span>
                </div>
                <div className="flex gap-5 text-xl md:text-2xl text-gray-600">
                    <p className="p-2 bg-slate-100 rounded-full drop-shadow-md">Software Engineer</p>
                    <p className="p-2 bg-slate-100 rounded-full drop-shadow-md">Data Engineer</p>
                    <p className="p-2 bg-slate-100 rounded-full drop-shadow-md">Web Developer</p>
                </div>
            </div>
        </div>
    )
}