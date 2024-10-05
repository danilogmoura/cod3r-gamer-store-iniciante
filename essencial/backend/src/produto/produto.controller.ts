import { Controller, Get, Param } from '@nestjs/common';
import { Produto, produtos } from 'src/core'

@Controller('produtos')
export class ProdutoController {

    @Get()
    async listar(): Promise<Produto[]> {
        return produtos.map((produto) => ({
            ...produto,
            especificacoes: { destaque: produto.especificacoes.destaque },
        }));
    }

    @Get(":id")
    async buscarPorId(@Param("id") id: string): Promise<Produto | null> {
        const produto = produtos.find(produto => produto.id === +id)
        return produto ?? null
    }
}