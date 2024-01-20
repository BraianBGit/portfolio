import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from "@/app/theme-provider";
import {ThemeSwitcher} from "@/app/ThemeSwitcher";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Braian Biale',
    description: 'Software Engineer Portfolio',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={"dark:text-amber-600 dark:bg-gray-600"}>
            <body className={inter.className}>
                <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
                    <>
                        {children}
                    </>
                </ThemeProvider>
            </body>
        </html>
    )
}
