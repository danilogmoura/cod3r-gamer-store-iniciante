'use client'
import { Produto } from '@gstore/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useEffect, useState } from 'react'
import TituloProduto from '@/components/produto/TituloProduto'
import InformacoesProduto from '@/components/produto/InformacoesProduto'
import ProdutoNaoEncontrado from '@/components/produto/ProdutoNaoEncontrado'
import BannerCompra from '@/components/produto/BannerCompra'
import MedidorDePreco from '@/components/produto/MedidorDePreco'
import AvaliacoesUsuarios from '@/components/produto/AvaliacoesUsuarios'
import AvaliacaoEspecializada from '@/components/produto/AvaliacaoEspecializada'

export default function PaginaProduto(props: any) {
    const { buscarPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        buscarPorId(+props.params.id).then(setProduto)
    }, [props.params.id, buscarPorId])

    return produto ? (
        <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
                <TituloProduto produto={produto} />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
                <MedidorDePreco produto={produto} />
            </div>
            <AvaliacoesUsuarios produto={produto} />
            <AvaliacaoEspecializada produto={produto} />
        </div>
    ) : (<ProdutoNaoEncontrado />)
}
