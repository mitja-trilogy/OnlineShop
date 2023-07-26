import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from "./users.entity"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersResolver } from './users.resolver';
import {JwtService} from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UsersService, UsersResolver, JwtService]
})
export class UsersModule {}
