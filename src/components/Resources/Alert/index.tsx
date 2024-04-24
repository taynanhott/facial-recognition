import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"

export function AlertText(props: { variant: string }) {

    let color, title, text = '';

    switch (props.variant) {
        case 'success':
            color = 'text-green-500'
            title = 'Sucesso!';
            text = 'Reconhecimento facial está sendo realizado com sucesso.';
            break;
        case 'error':
            color = 'text-rose-500'
            title = 'Falha no Reconhecimento!';
            text = 'Posicione corretamente a pelo menos 50cm de distância da câmera.';
            break;
        default:
            color = 'text-yellow-400'
            title = 'Carregando...';
            text = 'Aguarde até que o reconhecimento facial seja inicializado.';
            break;
    }

    return (
        <div>
            <Alert className="text-center bg-transparent border border-white">
                <AlertTitle className={color}>{title}</AlertTitle>
                <AlertDescription className="bg-inherit text-white">
                    {text}
                </AlertDescription>
            </Alert>
        </div>
    )
}