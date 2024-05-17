import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { NewsModule } from "./news/news.module";
import { OrderModule } from "./order/order.module";
import { PaginationModule } from "./pagination/pagination.module";
import { PrismaService } from "./prisma.service";
import { ProductModule } from "./product/product.module";
import { ReviewModule } from "./review/review.module";
import { StatisticsModule } from "./statistics/statistics.module";
import { UserModule } from "./user/user.module";
import { FilesModule } from "./files/files.module";
import { GenerationModule } from "./generation/generation.module";
import { CarDto } from "./car/car.dto";
import { ModelModule } from "./model/model.module";
import { CurrencyModule } from "./currency/currency.module";
import { EmailModule } from "./email/email.module";
import configuration from "./config/configuration";

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [configuration]
		}),
		AuthModule,
		UserModule,
		ProductModule,
		ReviewModule,
		CategoryModule,
		OrderModule,
		StatisticsModule,
		PaginationModule,
		NewsModule,
		FilesModule,
		GenerationModule,
		CarDto,
		ModelModule,
		CurrencyModule,
		EmailModule
	],
	controllers: [AppController],
	providers: [AppService, PrismaService]
})
export class AppModule {}
