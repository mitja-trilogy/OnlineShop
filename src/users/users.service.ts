import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from "./users.entity"
import { InjectRepository } from "@nestjs/typeorm";
import {ProductDTO, ProductInput} from "../product/dto/product.dto";
import {ProductEntity} from "../product/product.entity";
import {UsersDTO, UsersInput} from "./dto/users.dto";
import {User} from "@apollo/server/src/plugin/schemaReporting/generated/operations";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private UsersRepository: Repository<UsersEntity>,
    ) {}
    async findOne(username: string): Promise<any> {
        return await this.UsersRepository.findOneBy({ username: username });
    }

    async getUsers(): Promise<any> {
        return await this.UsersRepository.find();
    }

    async addUser(user: UsersInput): Promise<any>{
        let userEntity: UsersEntity = new UsersEntity();
        userEntity.generateFromInputData(user);
        let result = await this.UsersRepository.insert(userEntity);
        const newUser = {
            ...user,
            id: result.raw[0].id,
        };
        return new Promise(resolve => {
            resolve(newUser);
        });
    }
}
