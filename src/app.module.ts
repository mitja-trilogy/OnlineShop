import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoryModule } from './product-category/product-category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
      GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: true,
      }),
      ProductCategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
