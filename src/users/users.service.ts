import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UsersEntity } from "./users.entity"
import { InjectRepository } from "@nestjs/typeorm";

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
}
