import { Module } from '@nestjs/common';
import { ProdutoPrisma } from './produto.prisma';
import { DbModule } from 'src/db/db.module';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma]
})
export class ProdutoModule { }
