import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductDTO, ProductInput, ProductMutation} from './dto/product.dto';
import {
    UseGuards
} from '@nestjs/common';
import {AuthGuard} from "../auth/auth.guard";
import {AdminGuard} from "../auth/admin.guard";


@Resolver(() => ProductDTO)
export class ProductResolver {
    constructor(private productService: ProductService) { }
    @UseGuards(AuthGuard)
    @Query(returns => [ProductDTO])
    products(@Args('categoryId', { type: () => Int }) categoryId: number) {
        return this.productService.getProductsForCategory(categoryId);
    }

    @UseGuards(AuthGuard)
    @Query(returns => ProductDTO, { nullable: true })
    product(@Args('id', { type: () => Int }) id: number) {
        return this.productService.getProduct(id);
    }

    @UseGuards(AdminGuard)
    @Mutation(returns => ProductDTO)
    createProduct(@Args('input') input: ProductInput) {
        return this.productService.addProduct(input);
    }


    @UseGuards(AdminGuard)
    @Mutation(returns => ProductMutation)
    updateProduct(@Args('input') input: ProductDTO) {
        return this.productService.updateProduct(input);
    }


    @UseGuards(AdminGuard)
    @Mutation(returns => ProductMutation)
    deleteProduct(@Args('id') id: number) {
        return this.productService.deleteProduct(id);
    }

}
