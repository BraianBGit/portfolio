"use client";
import Image from 'next/image'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import profilePic from "../../public/images/profile-pic.jpeg"
import {ThemeSwitcher} from "@/app/ThemeSwitcher";

export default function Home() {

    return (
        <main className={"bg-white px-10 md:px-20 lg:px-40 dark:bg-black"}>
            <section className={"min-h-screen"}>
                <nav className={"py-10 mb-12 flex justify-between items-center"}>
                    <h1 className={"text-xl font-burtons"}>Develop by Braian Biale</h1>
                    <ul className={"flex items-center"}>
                        <ThemeSwitcher />
                        <li><a
                            className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6"}
                            href={"#"}>Resume</a></li>
                    </ul>
                </nav>
                <div className={"text-center py-10"}>
                    <h2 className={"text-5xl py-2 text-teal-500 md:text-6xl"}>
                        Braian Biale
                    </h2>
                    <h3 className={"text-2xl py-2 md:text-3xl"}>
                        Software Engineer.
                    </h3>
                    <p className={"text-base py-5 leading-8 md:text-xl mx-auto"}>
                        I am a dedicated front-end developer with a strong background in building web and mobile
                        applications. Throughout my career, I had the privilege of being part of a large, international
                        team where we utilized Agile methodologies, particularly Scrum, to manage complex projects. In
                        one notable project involving over 10 developers, I played a pivotal role as a front-end
                        developer, contributing to bug fixing, implementing new functionalities, refactoring code, and
                        handling integrations.
                    </p>
                </div>
                <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}>
                    <AiFillLinkedin/>
                    <AiFillGithub/>
                    <AiFillInstagram/>
                </div>
                <div
                    className={"relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:w-96 md:h-96"}>
                    <Image src={profilePic} alt={"Profile Picture"} layout={"fill"} objectFit={"cover"}/>
                </div>
            </section>
            <section>
                <div className={"pt-10"}>
                    <h3 className={"text-3xl py-3"}>
                        Job Experience
                    </h3>
                    <p className={"text-base py-2 leading-8 text-gray-800 dark:text-gray-400"}>
                        My technical expertise includes React.js, Redux for state management, and tools like Postman for
                        endpoint testing. I am well-versed in version control using <span
                        className={"text-teal-500"}>GitHub</span>, following a branching
                        structure aligned with Scrum principles.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h3 className={"text-3xl py-1"}>
                        Projects I have worked on
                    </h3>
                    <p className={"text-base py-2 leading-8 text-gray-800 dark:text-gray-400"}>
                        Beyond my professional commitments, I continuously enhance my skills through side projects. This
                        not only helps me maintain and improve my current knowledge but also provides opportunities to
                        explore and learn new technologies. I am passionate about staying updated on industry trends and
                        contributing to innovative solutions in front-end development.
                    </p>
                </div>
                <div className={"xl:flex gap-10"}>
                    <div className={"flex flex-grow flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900"}>
                        <Image src={"https://picsum.photos/seed/pic/200/300"} alt={"project 1"} width={100}
                               height={100}/>
                        <h3 className={"text-lg font-medium pt-8 pb-2"}>Project Name</h3>
                        <p className={"py-2"}>Project description</p>
                        <h4 className={"py-4 text-teal-600"}>Technologies I used</h4>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>React.JS</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Redux</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Postman</p>
                    </div>
                    <div className={"flex flex-grow flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900"}>
                        <Image src={"https://picsum.photos/seed/pux/200/300"} alt={"project 1"} width={100}
                               height={100}/>
                        <h3 className={"text-lg font-medium pt-8 pb-2"}>Project Name</h3>
                        <p className={"py-2"}>Project description</p>
                        <h4 className={"py-4 text-teal-600"}>Technologies I used</h4>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>React.JS</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Redux</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Postman</p>
                    </div>
                    <div className={"flex flex-grow flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-900"}>
                        <Image src={"https://picsum.photos/seed/pax/200/300"} alt={"project 1"} width={100}
                               height={100}/>
                        <h3 className={"text-lg font-medium pt-8 pb-2"}>Project Name</h3>
                        <p className={"py-2"}>Project description</p>
                        <h4 className={"py-4 text-teal-600"}>Technologies I used</h4>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>React.JS</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Redux</p>
                        <p className={"text-gray-800 py-1 dark:text-gray-400"}>Postman</p>
                    </div>
                </div>
            </section>
        </main>
    )
}
