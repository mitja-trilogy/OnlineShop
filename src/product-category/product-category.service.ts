import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategoryEntity } from "./product-category.entity"

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(ProductCategoryEntity)
        private ProductCategoryRepository: Repository<ProductCategoryEntity>,
    ) {}

    getProductCategories(): Promise<any>{
        return this.ProductCategoryRepository.find();
    }

    getProductCategory(id: number): Promise<any>{
        return this.ProductCategoryRepository.findOneBy({ id });
    }
}
