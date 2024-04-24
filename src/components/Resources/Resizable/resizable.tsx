import Image from 'next/image'

interface Props {
    title: string;
    text: string;
}

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

export function Resizable({ title, text }: Props) {
    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="max-w-6xl rounded-lg"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[500px] items-center justify-center p-6">
                    <Image
                        src="/image/fotoia.png"
                        width={300}
                        height={300}
                        alt=""
                    />
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>

                <div className="flex items-center text-6xl font-bold font-sans justify-left p-6">
                    <p>{title}</p>
                </div>
                <div className="flex text-neutral-500 items-center text-xl font-sans justify-left p-6">
                    <p>{text}
                    </p>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    )
}