import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertText, Alerta } from "../Alert";

const classCard = 'min-h-[357px]';

export default function TabsItem() {
    return (
        <Tabs defaultValue="humor" className="p-2 w-full min-h-[420px] bg-gray-900 lg:max-w-sm items-center">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="humor">Verifica Humor</TabsTrigger>
                <TabsTrigger value="foto">Valida Foto</TabsTrigger>
            </TabsList>
            <TabsContent value="humor">
                <Card className={classCard}>
                    <CardHeader>
                        <CardTitle>Verifica Humor</CardTitle>
                        <CardDescription>
                            Faça expressões faciais para que o reconhecimento facial tente reconhece-las.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Expressão facial reconhecida</Label>
                            <Alerta variant={'success'} />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="foto">
                <Card className={classCard}>
                    <CardHeader>
                        <CardTitle>Valida foto</CardTitle>
                        <CardDescription>
                            Selecione uma foto para que o reconhecimento facial valide se a pessoa é ou não pessoa em questão.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="current">Selecione uma foto</Label>
                            <Input type="file" />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="current">Rosto reconhecido é igual ao da foto anexada?</Label>
                            <Alerta variant={'success'} />
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs >
    )
}
