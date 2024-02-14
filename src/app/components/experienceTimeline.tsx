const experienceTimeline = () => {
    return <section>
        <div className="dark:bg-black text-white py-8">
            <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                    <p className="ml-2 text-teal-500 uppercase tracking-loose">Experience Timeline</p>
                    <p className="text-3xl md:text-4xl text-gray-800 dark:text-white leading-normal md:leading-relaxed mb-2">Experience as a
                        developer</p>
                    <p className="text-sm md:text-base text-gray-800 dark:text-gray-50 mb-4">
                        Here’s a timeline summarizing my job experience working as a developer and software engineer.
                    </p>
                    <a href="https://www.linkedin.com/in/braian-biale/" target={"_blank"}
                       className="bg-transparent mr-auto hover:bg-teal-500 text-teal-500 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-teal-300 hover:border-transparent">
                        More info</a>
                </div>
                <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                    <div className="container mx-auto w-full h-full">
                        <div className="relative wrap overflow-hidden p-10 h-full">
                            <div className="border-2-2 border-teal-555 absolute h-full border"
                                 style={{right: "50%", border: "2px solid #14b8a6", borderRadius: "1%;"}}></div>
                            <div className="border-2-2 border-teal-555 absolute h-full border"
                                 style={{left: "50%", border: "2px solid #14b8a6", borderRadius: "1%;"}}></div>
                            <div
                                className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1 w-5/12 px-1 py-4 text-right">
                                    <p className="mb-3 text-base text-teal-500">Jan, 2023 - May, 2023</p>
                                    <h4 className="mb-3 font-bold text-gray-800 dark:text-white text-lg md:text-2xl">Kossmann Motopartes</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-800 dark:text-gray-50 text-opacity-100">
                                        Develop a desktop application with the primary goal of acquiring
                                        up-to-date product prices by extracting information from various suppliers'
                                        web-based price lists.
                                    </p>
                                </div>
                            </div>
                            <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                <div className="order-1 w-5/12"></div>
                                <div className="order-1  w-5/12 px-1 py-4 text-left">
                                    <p className="mb-3 text-base text-teal-500">Jul, 2020 - Feb, 2022</p>
                                    <h4 className="mb-3 font-bold text-gray-800 dark:text-white text-lg md:text-2xl">Sirius Software</h4>
                                    <p className="text-sm md:text-base leading-snug text-gray-800 dark:text-gray-50 text-opacity-100">
                                        Contributed as a front-end developer doing different kind of tasks: bug fixing,
                                        implementing new
                                        functionalities, code refactoring, etc. Had active participation in daily Scrum
                                        meetings and other Agile events. Used ReactJS, Redux and GitHub for version
                                        control as main technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default experienceTimeline;