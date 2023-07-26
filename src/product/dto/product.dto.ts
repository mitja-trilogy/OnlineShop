import {  IDField } from '@nestjs-query/query-graphql';
import { ObjectType, InputType, ID, Field } from '@nestjs/graphql';

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
    categoryId!: number;

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

@ObjectType('ProductMutation')
export class ProductMutation {
    @Field()
    success!: boolean
}