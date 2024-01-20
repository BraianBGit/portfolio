"use client"
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import { FaRegMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";


export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }

    return <button
        className={"w-fit text-2xl hover:scale-110 active:scale-100 duration-200"}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "light" ? <FaRegMoon /> : <IoSunnyOutline />}
    </button>
}