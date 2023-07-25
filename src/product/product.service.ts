import { Injectable } from '@nestjs/common';
import {ProductInput, ProductDTO} from "./dto/product.dto";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from "./product.entity";
import { ProductCategoryEntity } from '../product-category/product-category.entity';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)
        private ProductRepository: Repository<ProductEntity>,
    ) {}

    async getProductsForCategory(category: number): Promise<any>{
        let productCategoryEntity: ProductCategoryEntity = new ProductCategoryEntity();
        console.log(productCategoryEntity)
        productCategoryEntity.id = category;
        console.log(productCategoryEntity)
        // let result = await this.ProductRepository.findBy({ category: productCategoryEntity});
        let result = await this.ProductRepository.find({
            where: { category: productCategoryEntity },
            select: {
                id: true,
                name: true,
                description: true,
                price: true,
                weight: true,
                supplier: true,
                imageUrl: true,
                category: {
                    id: true
                }
            },
            relations: {
                category: true,
            },
        });
        console.log(result)
        return result;
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
        console.log(productEntity.id)
        let result = await this.ProductRepository.update({id: productEntity.id}, productEntity);
        console.log(result)
        const newProduct: ProductDTO = {
            ...productInput,
        };
        return new Promise(resolve => {
            resolve(newProduct);
        });
    }

    async deleteProduct(id: number): Promise<any>{
        let productEntity: ProductEntity = new ProductEntity();
        productEntity.id = id;
        console.log(productEntity.id)
        let result = await this.ProductRepository.delete({id: productEntity.id});
        console.log(result)

        return new Promise(resolve => {
            resolve("DELETED");
        });
    }
}
