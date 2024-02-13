"use client";
import Image from 'next/image'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from "react-icons/ai";
import profilePic from "../../public/images/profile-pic.png"
import reactJsLogo from "../../public/images/technologies/react-logo.png"
import postmanLogo from "../../public/images/technologies/postman-logo.png"
import {ThemeSwitcher} from "@/app/ThemeSwitcher";
import ProjectCard from "@/app/components/projectCard";

export default function Home() {

    return (
        <main className={"bg-white px-10 md:px-20 lg:px-40 dark:bg-black"}>
            <section className={"min-h-screen"}>
                <nav className={"py-10 mb-12 flex justify-between items-center"}>
                    <h1 className={"text-xl font-burtons"}>Develop by Braian Biale</h1>
                    <ul className={"flex items-center"}>
                        <ThemeSwitcher/>
                        <li><a
                            className={"bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6"}
                            href={"/files/cv-braianbiale-spanish.pdf"} download>Resume</a></li>
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
                <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400"}>
                    <a className={"hover:scale-110 transition-transform"} href={"https://www.linkedin.com/in/braian-biale/"} target={"_blank"}><AiFillLinkedin/></a>
                    <a className={"hover:scale-110 transition-transform"} href={"https://github.com/BraianBGit"} target={"_blank"}><AiFillGithub/></a>
                    <a className={"hover:scale-110 transition-transform"} href={"https://www.instagram.com/braianbiale/"} target={"_blank"}> <AiFillInstagram/></a>
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
                        My technical expertise includes <span
                        className={"text-teal-500"}>React.js</span>, <span
                        className={"text-teal-500"}>Redux</span> for state management, and tools like <span
                        className={"text-teal-500"}>Postman</span> for
                        endpoint testing. I am well-versed in version control using <span
                        className={"text-teal-500"}>GitHub</span>, following a branching
                        structure aligned with <span
                        className={"text-teal-500"}>Scrum</span> principles.
                    </p>
                </div>
            </section>
            <section>
                <div>
                    <h3 className={"text-3xl py-1 pt-10"}>
                        Projects I have worked on
                    </h3>
                    <p className={"text-base py-2 leading-8 text-gray-800 dark:text-gray-400"}>
                        Beyond my professional commitments, I continuously enhance my skills through side projects. This
                        not only helps me maintain and improve my current knowledge but also provides opportunities to
                        explore and learn new technologies. I am passionate about staying updated on industry trends and
                        contributing to innovative solutions in front-end development.
                    </p>
                </div>
                <div className={"flex flex-wrap flex-grow gap-10 py-10"}>
                    <ProjectCard imageSrc={"https://picsum.photos/seed/pr1/900/900"} imageAlt={"kmp-app"}
                                 name={"KMP App"}
                                 description={"Desktop application that updates a motoparts store price list using different providers price lists"}
                                 technologies={[reactJsLogo, postmanLogo]}/>
                    <ProjectCard imageSrc={"https://picsum.photos/seed/pr2/900/900"} imageAlt={"project 2"}
                                 name={"Project 2"} description={"Project 2 description"}
                                 technologies={[reactJsLogo]}/>
                    <ProjectCard imageSrc={"https://picsum.photos/seed/pr3/900/900"} imageAlt={"project 3"}
                                 name={"Project 3"} description={"Project 3 description"}
                                 technologies={[reactJsLogo]}/>
                </div>
            </section>
        </main>
    )
}
