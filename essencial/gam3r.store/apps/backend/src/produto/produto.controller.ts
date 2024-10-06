import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Produto } from '@gstore/core';
import { ProdutoPrisma } from './produto.prisma';

@Controller('produtos')
export class ProdutoController {
    constructor(readonly repo: ProdutoPrisma) { }

    @Get()
    async obterProdutos(): Promise<Produto[]> {
        return this.repo.listar();
    }

    @Get(':id')
    async obterProdutoPorId(@Param('id') id: string): Promise<Produto | null> {
        return this.repo.buscarPorId(+id);
    }

    @Post()
    async salvarProduto(@Body() produto: Produto): Promise<void> {
        return this.repo.salvar(produto);
    }

    @Delete(':id')
    async excluirProduto(@Param('id') id: string): Promise<void> {
        return this.repo.excluir(+id);
    }
}
