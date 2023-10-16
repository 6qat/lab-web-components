import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import React from 'react'
import {Toaster as HotToaster} from "react-hot-toast";
import {Toaster as ChadCnToaster} from "@/components/ui/toaster"
import MainNavbar from "@/components/main-navbar";
import {ThemeProvider} from "@/components/theme-provider";

import './globals.css'
import MainNavbar2 from "@/components/main-navbar2";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className} `}>
        <ThemeProvider attribute="class" disableTransitionOnChange >
            <HotToaster/>
            <ChadCnToaster/>
            <MainNavbar2/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    )
}
