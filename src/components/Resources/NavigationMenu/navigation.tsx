"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string; target: string }[] = [
    {
        title: "WhatsApp",
        href: "https://wa.me/+5531984145023",
        target: "_blank",
        description:
            "Contate-me através do meu WhatsApp via mensagem.",
    },
    {
        title: "E-mail",
        href: "mailto:taynanzhott@gmail.com",
        target: "_blank",
        description:
            "Contate-me  através do meu correio eletrônico.",
    },
]

export function NavigationMenuDemo() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Perfis</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="https://www.linkedin.com/in/taynan-hott/"
                                        target="_blank"
                                    >
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Linkedin
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Visualizar meu perfil profissional e especializações.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="https://github.com/taynanhott" target="_blank" title="Github">
                                Visualizar meus projetos como desenvolvedor.
                            </ListItem>
                            <ListItem href="https://cursos.alura.com.br/user/taynanzhott/fullCertificate/2c3993afc6128a8463b082e21246bf06" target="_blank" title="Alura">
                                Visualizar meus cursos concluídos através da plataforma de cursos.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Contatos</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                    target={component.target}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"