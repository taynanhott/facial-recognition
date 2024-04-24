import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SimpleSelect from "../Select/select"
import { DatePicker } from "../DatePicker/datepicker"
import { DataTable } from "../DataTable/datatable"

const classCard = 'min-h-[638.5px]';

export default function TabsItem() {
    return (
        <Tabs defaultValue="cadastrar" className="min-w-full">
            <Label className="text-center flex text-lg text-current border opacity-50 p-0.5 rounded-md border-current mb-2 justify-center">Cadastro</Label>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cadastrar">Cadastrar Pagamentos</TabsTrigger>
                <TabsTrigger value="gerenciar">Gerenciar Valores</TabsTrigger>
            </TabsList>
            <TabsContent value="cadastrar">
                <Tabs defaultValue="item" className="justify-center">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="item">Pagamento</TabsTrigger>
                        <TabsTrigger value="group">Categoria</TabsTrigger>
                    </TabsList>
                    <TabsContent value="item">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Cadastrar Item</CardTitle>
                                <CardDescription>
                                    Cadastre um item para listagem.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Nome item</Label>
                                    <Input id="name" defaultValue="Item genérico" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="category">Categoria</Label>
                                    <SimpleSelect
                                        options={[
                                            { value: 'D', description: "Débito" },
                                            { value: 'C', description: "Crédito" },
                                            { value: 'P', description: "Parcelado" },
                                        ]}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="value">Valor</Label>
                                    <Input id="value" defaultValue="R$ 10,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label className="block" htmlFor="date">Data</Label>
                                    <DatePicker />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Cadastrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="group">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Cadastrar Categoria</CardTitle>
                                <CardDescription>
                                    Cadastre novas categorias de item.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Nome Categoria</Label>
                                    <Input id="current" type="group" defaultValue="Categoria genérica" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Cadastrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>
            <TabsContent value="gerenciar">
                <Tabs defaultValue="receber" className="justify-center">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="receber">Valores à Receber</TabsTrigger>
                        <TabsTrigger value="investimento">Valor Investido</TabsTrigger>
                        <TabsTrigger value="reserva">Reserva de Segurança</TabsTrigger>
                    </TabsList>
                    <TabsContent value="receber">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Valores à Receber</CardTitle>
                                <CardDescription>
                                    Cadastre os valores à receber em um determinado mês.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Valor à receber</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label className="block" htmlFor="current">Data da Movimentação</Label>
                                    <DatePicker />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Cadastrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="investimento">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Valor Investido</CardTitle>
                                <CardDescription>
                                    Cadastre os valores alocados para investimento.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Valor investido</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>

                                <div className="space-y-1">
                                    <Label className="block" htmlFor="current">Data da Movimentação</Label>
                                    <DatePicker />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Cadastrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reserva">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Reserva de Segurança</CardTitle>
                                <CardDescription>
                                    Cadastre os valores obtidos para reserva de segurança.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Valor reservado</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label className="block" htmlFor="current">Data da Movimentação</Label>
                                    <DatePicker />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Cadastrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent>
        </Tabs >
    )
}

export function TabsGerenciar() {
    return (
        <Tabs defaultValue="levantamento" className="min-w-full">
            <Label className="text-center flex text-lg text-current border opacity-50 p-0.5 rounded-md border-current mb-2 justify-center">Analítico</Label>
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="levantamento">Levantamento</TabsTrigger>
                <TabsTrigger value="parametros">Parâmetros</TabsTrigger>
            </TabsList>
            <TabsContent value="levantamento">
                <Tabs defaultValue="mensal" className="justify-center">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="mensal">Valores do Mês</TabsTrigger>
                        <TabsTrigger value="receber">Valores à Receber</TabsTrigger>
                        <TabsTrigger value="faturamento">Faturamento do Mês</TabsTrigger>
                        <TabsTrigger value="reserva">Reserva de Segurança</TabsTrigger>
                    </TabsList>
                    <TabsContent value="mensal">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Valores do Mês</CardTitle>
                                <CardDescription>
                                    Visualize todos os valores previstos para serem recebidos no mês.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <DataTable />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="receber">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Valores à Receber</CardTitle>
                                <CardDescription>
                                    Visualize os valores pendentes de recebimento.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <DataTable />
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="faturamento">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Faturamento do Mês</CardTitle>
                                <CardDescription>
                                    Visualize os dados de faturamento para o mês.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Total à Pagar</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">Total à Receber</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="reserva">
                        <Card className={classCard}>
                            <CardHeader>
                                <CardTitle>Reserva de Segurança</CardTitle>
                                <CardDescription>
                                    Gerencie sua reserva de emergência.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Porcentagem de Reserva</Label>
                                    <Input id="current" type="group" defaultValue="0,00%" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">Total após 5º dia util</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">Valor de Reserva</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="current">Valor Restante sem Reserva</Label>
                                    <Input id="current" type="group" defaultValue="R$ 0,00" />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </TabsContent >
            <TabsContent value="parametros">
                <Tabs defaultValue="item" className="justify-center">
                    <Card className={classCard}>
                        <CardHeader>
                            <CardTitle>Parâmetros de Data</CardTitle>
                            <CardDescription>
                                Define a data de abrangência de contabilização dos valores.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label className="block" htmlFor="name">Data Inicial</Label>
                                <DatePicker />
                            </div>
                            <div className="space-y-1">
                                <Label className="block" htmlFor="value">Data Final</Label>
                                <DatePicker />
                            </div>
                            <div className="space-y-1">
                                <Label className="block" htmlFor="date">Semanas Restantes</Label>
                                <Input id="name" defaultValue="Item genérico" />
                            </div>
                        </CardContent>
                    </Card>
                </Tabs>
            </TabsContent>
        </Tabs >
    )
}

export function Menu() {
    return (
        <Tabs defaultValue="analitico" className="min-w-full">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
                <TabsTrigger value="analitico">Analítico</TabsTrigger>
            </TabsList>
            <TabsContent value="cadastro">
                {TabsItem()}
            </TabsContent>
            <TabsContent value="analitico">
                {TabsGerenciar()}
            </TabsContent>
        </Tabs>
    );
}