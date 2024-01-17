import Image from 'next/image'
import {BsFillMoonStarsFill} from "react-icons/bs";

export default function Home() {
    return (
        <main className={"bg-white px-10"}>
            <section className={"min-h-screen"}>
                <nav className={"py-10 mb-12 flex justify-between"}>
                    <h1 className={"text-xl"}>Develop by Braian</h1>
                    <ul className={"flex items-center"}>
                        <li className={"cursor-pointer text-2xl"}><BsFillMoonStarsFill/></li>
                        <li><a href={"#"}>Resume</a></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}
