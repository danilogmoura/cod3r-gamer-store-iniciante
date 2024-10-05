'use client'
import { Produto } from "@/core"
import { useCallback, useEffect, useState } from "react"

const urlBase = "http://localhost:4000"

export default function useProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([])

    async function listar(): Promise<Produto[]> {
        const response = await fetch(`${urlBase}/produtos`)

        const produtos = await response.json()

        return produtos
    }

    const buscarPorId = useCallback(
        async function buscarPorId(id: number): Promise<Produto | null> {
            const response = await fetch(`${urlBase}/produtos/${id}`)

            const produtos = await response.json()

            return produtos
        }, []
    )

    useEffect(() => {
        listar().then(setProdutos)
    }, [])

    return {
        produtos, buscarPorId,
    }
}