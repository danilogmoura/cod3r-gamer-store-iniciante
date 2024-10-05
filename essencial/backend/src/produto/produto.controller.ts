import { Body, Controller, Get, Param, Post, Delete } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { Produto } from '@prisma/client';

@Controller('produtos')
export class ProdutoController {

    constructor(readonly repo: ProdutoPrisma) { }

    @Get()
    async listar(): Promise<Produto[]> {
        return this.repo.listar()
    }

    @Get(":id")
    async buscarPorId(@Param("id") id: string): Promise<Produto | null> {
        return this.repo.buscaPorId(+id)
    }

    @Post()
    async salvar(@Body() produto: Produto): Promise<void> {
        return this.repo.salvar(produto)
    }

    @Delete(":id")
    async excluir(@Param("id") id: string): Promise<void> {
        return this.repo.excluir(+id)
    }
}