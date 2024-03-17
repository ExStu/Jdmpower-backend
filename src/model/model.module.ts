import { Module } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelController } from './model.controller';
import { PrismaService } from 'src/prisma.service'
import { CarModule } from "src/car/car.module";

@Module({
	controllers: [ModelController],
	imports: [CarModule],
	providers: [ModelService, PrismaService],
	exports: [ModelService]
})
export class ModelModule {}
