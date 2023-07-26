import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthResolver } from './auth.resolver';
import { UsersService } from "../users/users.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UsersEntity} from "../users/users.entity";
import { JwtModule } from '@nestjs/jwt';
import * as process from "process";

const JWTSecret = process.env.jwtSecret

@Module({
    imports: [
        TypeOrmModule.forFeature([UsersEntity]),
        UsersModule,
        JwtModule.register({
            secret: JWTSecret
        }),
    ],
    providers: [AuthService, AuthResolver, UsersService],
})
export class AuthModule {}