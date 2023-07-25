import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoryModule } from './product-category/product-category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
      GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: true,
      }),
      ProductCategoryModule,
      ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
