import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryResolver } from './product-category.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryEntity } from "./product-category.entity"

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
  providers: [ProductCategoryResolver, ProductCategoryService]
})
export class ProductCategoryModule {}
