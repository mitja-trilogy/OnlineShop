import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType('ProductCategory')
export class ProductCategoryDTO {
    @IDField(() => ID)
    id!: string;

    @Field()
    name!: string;

    @Field()
    description!: string;

}

