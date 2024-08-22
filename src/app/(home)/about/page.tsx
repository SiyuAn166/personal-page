import classNames from "classnames"
import Introduction from "@/components/about/introduction"
import Experience from "@/components/about/experience"

export default function AboutMe(){
    return (
        <div className={classNames(
            "relative",
            "flex flex-col items-center justify-start",
            "animate-fade-up",
            "md:w-2/3",
        )}>
            <Introduction/>
            <Experience/>
        </div>
    )
}