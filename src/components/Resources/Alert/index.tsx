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
            text = 'Rosto reconhecido com sucesso.';
            break;
        case 'error':
            color = 'text-rose-500'
            title = 'Falha no Reconhecimento!';
            text = 'Posicione corretamente e se afaste da câmera.';
            break;
        default:
            color = 'text-yellow-400'
            title = 'Carregando...';
            text = 'Aguarde até que o reconhecimento facial seja inicializado.';
            break;
    }

    return (
        <Alert className="text-[12px] text-center min-w-full bg-transparent border border-white">
            <AlertTitle className={color}>{title}</AlertTitle>
            <AlertDescription className="bg-inherit text-[12px] text-white">
                {text}
            </AlertDescription>
        </Alert>
    )
}

export function Alerta(props: { variant: string }) {

    let color, title, text = '';

    switch (props.variant) {
        case 'success':
            color = 'text-green-500'
            title = 'Sucesso!';
            text = 'Rosto reconhecido com sucesso.';
            break;
        case 'error':
            color = 'text-rose-500'
            title = 'Falha no Reconhecimento!';
            text = 'Posicione corretamente e se afaste da câmera.';
            break;
        default:
            color = 'text-yellow-400'
            title = 'Falha na validação';
            text = 'Processo não foi concluído.';
            break;
    }

    return (
        <Alert className="text-[12px] text-center min-w-full bg-transparent border border-current">
            <AlertTitle className={color}>{title}</AlertTitle>
            <AlertDescription className="bg-inherit text-[12px]">
                {text}
            </AlertDescription>
        </Alert>
    )
}