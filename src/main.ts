import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidateInputPipe } from "./core/pipes/validate.pipe";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle("Mini Blog")
        .setDescription("Mini Nest Blog API description")
        .setVersion("0.1")
        .build(); // Build the document

    // Create a Swagger document using the application instance and the document configuration
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup("docs", app, document);

    app.setGlobalPrefix("api/v1");
    app.useGlobalPipes(new ValidateInputPipe());
    await app.listen(3000);
}
bootstrap();
