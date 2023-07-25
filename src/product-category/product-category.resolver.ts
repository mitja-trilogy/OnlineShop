import { Resolver, Query, Args } from '@nestjs/graphql';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';

@ObjectType()
export class ProductCategory {
    @Field(type => Int)
    id: number;

    @Field()
    name: string;

    @Field()
    description: string;
}

@Resolver('ProductCategory')
export class ProductCategoryResolver {
    constructor(private productCategoryService: ProductCategoryService) { }
    @Query(returns => [ProductCategory])
    productCategories() {
        return this.productCategoryService.getProductCategories();
    }

    @Query(returns => ProductCategory, { nullable: true })
    productCategory(@Args('id', { type: () => Int }) id: number) {
        return this.productCategoryService.getProductCategory(id);
    }

}
