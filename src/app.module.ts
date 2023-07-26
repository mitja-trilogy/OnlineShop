import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductCategoryModule } from './product-category/product-category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryEntity } from './product-category/product-category.entity'
import { ProductEntity } from './product/product.entity'
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import {UsersEntity} from "./users/users.entity";

@Module({
  imports: [
      GraphQLModule.forRoot({
          driver: ApolloDriver,
          autoSchemaFile: true,
      }),
      TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'online_shop_user',
          password:  process.env.online_shop_user_password,
          database: 'online_shop',
          entities: [ProductCategoryEntity, ProductEntity, UsersEntity],
          synchronize: true,
      }),
      ProductCategoryModule,
      ProductModule,
      AuthModule,
      UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
