import { Module } from '@nestjs/common';
import { GenerationService } from './generation.service';
import { GenerationController } from './generation.controller';
import { PrismaService } from 'src/prisma.service'
import { ModelModule } from "src/model/model.module";

@Module({
	controllers: [GenerationController],
	imports: [ModelModule],
	providers: [GenerationService, PrismaService],
	exports: [GenerationService]
})
export class GenerationModule {}
