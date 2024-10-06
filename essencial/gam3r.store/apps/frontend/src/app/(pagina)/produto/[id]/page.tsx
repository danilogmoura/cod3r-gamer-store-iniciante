'use client'
import { Produto } from '@gstore/core'
import useProdutos from '@/data/hooks/useProdutos'
import { useEffect, useState } from 'react'

export default function PaginaProduto(props: any) {
    const { buscarPorId } = useProdutos()
    const [produto, setProduto] = useState<Produto | null>(null)

    useEffect(() => {
        buscarPorId(+props.params.id).then(setProduto)
    }, [props.params.id, buscarPorId])

    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}