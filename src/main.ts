import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('JdmPower API')
		.setDescription('Description of all endpoints for JdmPower')
		.setVersion('1.0')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('api')
	app.enableCors()
	await app.listen(4200, "0.0.0.0")
}
bootstrap();
