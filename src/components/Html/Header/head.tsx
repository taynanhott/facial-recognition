import { ModeToggle } from "@/components/Resources/ModeToggle";
import { NavigationMenuDemo } from "../../Resources/NavigationMenu/navigation";

export function Head() {
    return (
        <div className="z-20 bg-gray-900 relative flex items-center justify-between py-4 mb-10">
            <div>
                <div className="flex items-center">
                    <a
                        href="/home"
                        target="_self"
                    >
                        <p className="font-bold text-white mr-4 text-xl lg:text-2xl ml-4">Portfólio</p>
                    </a>
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="flex items-center">
                <ModeToggle />
            </div>
        </div>
    );
}