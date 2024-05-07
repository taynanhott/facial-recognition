import { ModeToggle } from "@/components/Resources/ModeToggle";
import { NavigationMenuDemo } from "../../Resources/NavigationMenu/navigation";

export function Head() {
    return (
        <div className="z-20 relative border shadow-lg backdrop-blur-sm flex items-center justify-between py-4 mb-10">
            <div className="flex items-center">
                <a
                    href="https://taynan.dev"
                    target="_self"
                >
                    <p className="font-bold mr-4 text-xl lg:text-2xl ml-4">Portfólio</p>
                </a>
                <NavigationMenuDemo />
            </div>
            <div className="flex mr-4 items-center">
                <ModeToggle />
            </div>
        </div>
    );
}