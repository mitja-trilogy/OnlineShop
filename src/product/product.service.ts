import { Injectable } from '@nestjs/common';
import {ProductInput, ProductDTO} from "./dto/product.dto";
import { InjectRepository } from '@nestjs/typeorm';
import {DeleteResult, Repository, UpdateResult} from 'typeorm';
import { ProductEntity } from "./product.entity";
import { ProductCategoryEntity } from '../product-category/product-category.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private ProductRepository: Repository<ProductEntity>,
    ) {}

    getProductsForCategory(category: number): Promise<any>{
        let productCategoryEntity: ProductCategoryEntity = new ProductCategoryEntity();
        productCategoryEntity.id = category;
        return this.ProductRepository.findBy({ categoryId: category});
    }

    getProduct(id: number): Promise<any>{
        return this.ProductRepository.findOneBy({ id });
    }

    async addProduct(productInput: ProductInput): Promise<any>{
        let productEntity: ProductEntity = new ProductEntity();
        productEntity.generateFromInputData(productInput);
        let result = await this.ProductRepository.insert(productEntity);
        const newProduct: ProductDTO = {
            ...productInput,
            id: result.raw[0].id,
        };
        return new Promise(resolve => {
            resolve(newProduct);
        });
    }

    async updateProduct(productInput: ProductDTO): Promise<any>{
        let productEntity: ProductEntity = new ProductEntity();
        productEntity.generateFromInputData(productInput);
        productEntity.id = productInput.id;
        let result : UpdateResult = await this.ProductRepository.update({id: productEntity.id}, productEntity);
        let success : boolean = false;
        if (result.affected === 1){
            success = true;
        }
        return new Promise(resolve => {
            resolve({success: success});
        });
    }

    async deleteProduct(id: number): Promise<any>{
        let productEntity: ProductEntity = new ProductEntity();
        productEntity.id = id;
        let result : DeleteResult = await this.ProductRepository.delete({id: productEntity.id});
        let success : boolean = false;
        if (result.affected === 1){
            success = true;
        }
        return new Promise(resolve => {
            resolve({success: success});
        });
    }
}
