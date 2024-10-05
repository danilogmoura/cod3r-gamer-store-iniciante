import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
    return (
        <div>
            <Cabecalho />
            <main>{props.children}</main>
            <Rodape />
        </div>
    )
}