import classNames from "classnames"


export default function Introduction() {
    return (
        <div className={classNames(
            // "absolute"
            "w-full",

        )}>
            <p className={classNames(
                "font-mono text-blue-500 text-5xl",
                "underline",
                "p-5",
                
            )}>About me</p>

            <div className={classNames(
                    "flex flex-col gap-5",
                    "text-lg px-5"
                )}>
                <p>
                    I am an experienced and results-driven software developer with 3 years of expertise in Full Stack Development. Proven ability to build robust and scalable applications using Java and Python, with a focus on creating intuitive and visually appealing user interfaces. Skilled in front-end technologies such as HTML, CSS, and JavaScript, along with frameworks like React, Next.js. Strong communicator and collaborator, seeking to contribute value to a forward-thinking team or organization.
                </p>
                <p>

                    My journey into software development commenced in 2015, driven by a passion for technology and a desire to create. Beginning with self-taught Java programming, I embarked on a path that would shape my career. In 2017, I officially entered the realm of professional software development as a Java Software Developer.
                </p>
                <p>

                    In my role, I honed my skills in crafting robust backend applications utilizing frameworks like Spring Boot, alongside database management with MyBatis and MySQL. Specializing in architecting RESTful APIs, I found joy in constructing systems that seamlessly communicated and delivered data.
                </p>
                <p>
                    Driven by a hunger for knowledge and a commitment to growth, I decided to pursue further education in Computer Science at Simon Fraser University in Canada. During my tenure at SFU, my focus shifted towards emerging technologies in Deep Learning and Computer Vision. Delving into these cutting-edge fields, I expanded my understanding of artificial intelligence and its applications, paving the way for new opportunities and challenges in my journey as a developer.
                </p>
            </div>


        </div>
    )
}