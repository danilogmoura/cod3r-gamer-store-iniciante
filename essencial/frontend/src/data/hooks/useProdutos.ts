'use client'
import { Produto } from "@/core"
import { useEffect, useState } from "react"

export default function useProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function listar(): Promise<Produto[]> {
        const response = await fetch("http://localhost:4000/produtos")

        const produtos = await response.json()

        return produtos
    }

    useEffect(() => {
        listar().then(setProdutos)
    }, [])

    return {
        produtos,
    }
}