import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function SimpleSelect(props: {
    options: { value: string; description: string }[];
}) {
    return (
        <Select>
            <SelectTrigger className="">
                <SelectValue placeholder="Selecione uma categoria..." />
            </SelectTrigger>
            <SelectContent>
                {props.options.map((option, index) => (
                    <SelectItem key={index} value={option.value}>
                        {option.description}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}