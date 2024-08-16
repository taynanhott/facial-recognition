"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"

export function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <NavigationMenu className="cursor-pointer">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] mr-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Tema</span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="gap-3 p-2 lg:grid-cols-[.75fr_1fr]">
                            <li onClick={() => setTheme("light")} className="p-2 mb-2 rounded-md hover:bg-gray-600 hover:text-white">
                                Claro
                            </li>
                            <li onClick={() => setTheme("dark")} className="p-2 rounded-md hover:bg-gray-600 hover:text-white">
                                Escuro
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}