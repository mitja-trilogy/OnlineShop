
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { GqlExecutionContext } from '@nestjs/graphql';

const JWTSecret = process.env.jwtSecret;
@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const gqlContext : GqlExecutionContext = GqlExecutionContext.create(context);
        const headers = gqlContext.getContext().req.headers;
        const authToken : string = this.extractTokenFromHeader(headers); // Assuming you have an "Authorization" header for the token
        if (!authToken) {
            // Authentication token missing, deny access
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(
                authToken,
                {
                    secret: JWTSecret
                }
            );
            if (payload.role !== "admin"){
                throw new UnauthorizedException();
            }
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }
    private extractTokenFromHeader(headers: any): string | undefined {
        const [type, token] = headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}