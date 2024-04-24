import { DataTable } from "@/components/Resources/DataTable/datatable";
import { Menu } from "@/components/Resources/Tabs/tabs";

export default function Todolist() {

    return (
        <div className="z-10">
            <div className="max-w-[768px] mx-auto flex justify-center px-5">
                <Menu />
            </div>
        </div>
    );
}