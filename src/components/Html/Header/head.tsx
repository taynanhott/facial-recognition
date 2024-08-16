import { ModeToggle } from "@/components/Resources/ModeToggle";
import Link from "next/link";

export function Head() {
    return (
        <div className="z-20 relative border shadow-lg backdrop-blur-sm flex items-center justify-center py-4 mb-12 lg:mb-24">
            <a href="https://taynan.dev" target="_self" className="font-bold text-xl ml-auto pl-20 lg:text-2xl">
                <p >Portfólio</p>
            </a>
            <div className="flex ml-auto items-center pr-4">
                <ModeToggle />
            </div>
        </div>
    );
}