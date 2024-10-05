import Cabecalho from "./Cabecalho";

export default function Pagina(props: any) {
    return (
        <div>
            <Cabecalho />
            <main>{props.children}</main>
        </div>
    )
}