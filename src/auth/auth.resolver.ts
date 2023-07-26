import {Args, Int, Mutation, Resolver} from '@nestjs/graphql';
import {AuthService} from "./auth.service";
import {LoginDTO, LoginResult} from "./dto/auth.dto";

@Resolver()
export class AuthResolver {
    constructor(private authService: AuthService) { }
    @Mutation(returns => LoginResult, { nullable: true })
    login(@Args('input') input: LoginDTO) {
        return this.authService.login(input.username, input.password);
    }
}
