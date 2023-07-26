import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ProductCategoryService } from './product-category.service';
import { ProductCategoryDTO } from './dto/product-category.dto';

@Resolver(() => ProductCategoryDTO)
export class ProductCategoryResolver {
    constructor(private productCategoryService: ProductCategoryService) { }
    @Query(returns => [ProductCategoryDTO])
    productCategories() {
        return this.productCategoryService.getProductCategories();
    }

    @Query(returns => ProductCategoryDTO, { nullable: true })
    productCategory(@Args('id', { type: () => Int }) id: number) {
        return this.productCategoryService.getProductCategory(id);
    }

}
