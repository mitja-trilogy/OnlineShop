import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from 'typeorm';
import { ProductCategoryEntity } from '../product-category/product-category.entity';
import { ProductDTO, ProductInput} from './dto/product.dto';

@Entity()
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    weight: number;

    @ManyToOne(() => ProductCategoryEntity, (productCategory) => productCategory.id)
    category: ProductCategoryEntity

    @Column()
    supplier: number;

    @Column({nullable: true})
    imageUrl: string;

    generateFromInputData(productInput: ProductInput){
        let productCategoryEntity: ProductCategoryEntity = new ProductCategoryEntity();
        productCategoryEntity.id = productInput.category;
        this.name = productInput.name;
        this.description = productInput.description;
        this.price = productInput.price;
        this.weight = productInput.weight;
        this.supplier = productInput.supplier;
        this.imageUrl = productInput.imageUrl;
        this.category = productCategoryEntity;
    }
}