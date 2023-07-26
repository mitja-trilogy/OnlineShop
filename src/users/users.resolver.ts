import {Query, Resolver} from '@nestjs/graphql';
import {UsersService} from "./users.service";
import {UsersDTO} from "./dto/users.dto";

@Resolver()
export class UsersResolver {
    constructor(private usersService: UsersService) { }
    @Query(returns => [UsersDTO])
    users() {
        return this.usersService.getUsers();
    }
}
