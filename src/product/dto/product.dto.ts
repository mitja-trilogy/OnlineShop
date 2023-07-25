import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, InputType, OmitType, ID, Field } from '@nestjs/graphql';

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

    @Field()
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