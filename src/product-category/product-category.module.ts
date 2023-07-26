import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryResolver } from './product-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryEntity } from "./product-category.entity"
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
  providers: [ProductCategoryResolver, ProductCategoryService, JwtService]
})
export class ProductCategoryModule {}
