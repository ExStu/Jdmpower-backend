import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { PrismaService } from 'src/prisma.service'
import { PaginationService } from "../pagination/pagination.service";

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaService, PaginationService]
})
export class NewsModule {}
