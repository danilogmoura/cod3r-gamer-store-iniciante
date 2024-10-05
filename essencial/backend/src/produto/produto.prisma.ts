import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
    constructor(readonly prisma: PrismaProvider) { }

    async listar(): Promise<Produto[]> {
        return this.prisma.produto.findMany() as any;
    }

    async buscaPorId(id: number): Promise<Produto | null> {
        const produto = await this.prisma.produto.findUnique({ where: { id } });
        return (produto as any) ?? null;
    }

    async salvar(produto: Produto): Promise<void> {
        await this.prisma.produto.upsert({
            where: { id: produto.id ?? -1 },
            update: produto,
            create: produto,
        });
    }

    async excluir(id: number): Promise<void> {
        await this.prisma.produto.delete({ where: { id } });
    }
}
