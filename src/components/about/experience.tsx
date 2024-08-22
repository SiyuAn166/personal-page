import classNames from "classnames"

export default function Experience() {


    const data = [
        {
            title: "Data Engineer Co-op",
            time: "May 2023 - September 2023",
            desc: "Co-authored a manuscript for a peer-reviewed research paper destined for Nature Scientific Data, we made substantial contributions to advancing research methodologies and insights in the data science community. By implementing a Python-based ETL pipeline, we accelerated data acquisition by 50% and cut processing time by 25%, bolstering real-time data analysis capabilities and operational efficiency. Our development of a web API client integrating SOAP APIs facilitated seamless communication between systems, reducing manual data handling errors by 30% and optimizing user experience, thereby streamlining business operations."
        },
        {
            title: "Full Stack Developer",
            time: "March 2019 - October 2019",
            desc: "As a Full Stack Engineer at Best Energy Equipment China from March to October 2019, I redesigned architecture, integrated MQTT, and cut costs by 7%. Vue.js apps boosted revenue by 15%, RESTful APIs reduced integration time by 30%, and Docker deployment minimized errors by 25%. Collaborating closely with teams, API design improvements slashed project delivery time by 20%. My focus was driving innovation and efficiency, achieving tangible results."
        },
        {
            title: "Software Engineer",
            time: "Februrary 2018 - March 2019",
            desc: "I spearheaded the creation of a robust Kubernetes controller using Golang and Kubebuilder, cutting operation time by 50%. By integrating automated security scans through Jobs and CronJobs, I bolstered Kubernetes security, improving threat detection by 40%. Development efficiency soared with security check time reduced from 5 hours to 1.5 hours, accelerating release cycles by 20%. Additionally, I implemented a self-healing mechanism within the controller, slashing downtime by 25% and operational costs by 20%."
        }
    ]


    return (
        <div className={classNames(
            // "absolute"
            "w-full",
        )}>
            <p className={classNames(
                "font-mono text-blue-500 text-5xl",
                "underline",
                "p-5",
            )}>Experience</p>


            <div className="flex">
                <ol className="relative border-s border-blue-500 ml-6">
                    {data.map((item, index) => (
                        <li className="mb-10 ms-4" key={`${index}-${item.title}`}>
                            <div className="absolute w-3 h-3 bg-blue-500 rounded-full mt-1.5 -start-1.5 border border-white"></div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {item.time}
                            </time>
                            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                {item.desc}
                            </p>
                        </li>
                    ))}

                </ol>
            </div>




        </div>
    )
}