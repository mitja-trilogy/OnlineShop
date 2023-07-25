import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, InputType, OmitType, ID, Field } from '@nestjs/graphql';
import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany, ManyToOne} from 'typeorm';

@InputType()
@ObjectType()
export class Product {
    @Field()
    name!: string;

    @Field()
    description!: string;

    @Field()
    price!: number;

    @Field()
    weight!: number;

    @Field({nullable: true})
    category!: number;

    @Field()
    supplier!: number;

    @Field({ nullable: true })
    imageUrl: string;
}
@ObjectType('Product')
@InputType()
export class ProductDTO extends Product{
    @IDField(() => ID)
    id!: number;

}
@InputType('ProductInput')
export class ProductInput extends Product {}