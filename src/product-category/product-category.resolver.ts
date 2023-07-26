import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryDTO } from './dto/product-category.dto';
import {
    UseGuards
} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";

@Resolver(() => ProductCategoryDTO)
export class ProductCategoryResolver {
    constructor(private productCategoryService: ProductCategoryService) { }
    @UseGuards(AuthGuard)
    @Query(returns => [ProductCategoryDTO])
    productCategories() {
        return this.productCategoryService.getProductCategories();
    }

    @UseGuards(AuthGuard)
    @Query(returns => ProductCategoryDTO, { nullable: true })
    productCategory(@Args('id', { type: () => Int }) id: number) {
        return this.productCategoryService.getProductCategory(id);
    }

}
