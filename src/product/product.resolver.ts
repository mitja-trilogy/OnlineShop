import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductDTO, ProductInput, ProductMutation} from './dto/product.dto';

@Resolver(() => ProductDTO)
export class ProductResolver {
    constructor(private productService: ProductService) { }
    @Query(returns => [ProductDTO])
    products(@Args('categoryId', { type: () => Int }) categoryId: number) {
        return this.productService.getProductsForCategory(categoryId);
    }

    @Query(returns => ProductDTO, { nullable: true })
    product(@Args('id', { type: () => Int }) id: number) {
        return this.productService.getProduct(id);
    }

    @Mutation(returns => ProductDTO)
    createProduct(@Args('input') input: ProductInput) {
        return this.productService.addProduct(input);
    }

    @Mutation(returns => ProductMutation)
    updateProduct(@Args('input') input: ProductDTO) {
        return this.productService.updateProduct(input);
    }

    @Mutation(returns => ProductMutation)
    deleteProduct(@Args('id') id: number) {
        return this.productService.deleteProduct(id);
    }

}
