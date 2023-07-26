import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {UsersService} from "./users.service";
import {UsersDTO, UsersInput} from "./dto/users.dto";
import {UseGuards} from "@nestjs/common";
import {AdminGuard} from "../auth/admin.guard";
import {ProductDTO, ProductInput} from "../product/dto/product.dto";

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) { }

    @UseGuards(AdminGuard)
    @Query(returns => [UsersDTO])
    users() {
        return this.usersService.getUsers();
    }

    //@UseGuards(AdminGuard)  // This is commented out for testing, so anyone can create a new user at start
    @Mutation(returns => UsersDTO)
    createUser(@Args('input') input: UsersInput) {
        return this.usersService.addUser(input);
    }
}
