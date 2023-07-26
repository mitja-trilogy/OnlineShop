import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {UsersInput} from "./dto/users.dto";

@Entity()
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    generateFromInputData(user: UsersInput){
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;
    }
}