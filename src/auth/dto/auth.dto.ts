import {  IDField } from '@nestjs-query/query-graphql';
import { ObjectType, InputType, ID, Field } from '@nestjs/graphql';

@InputType()
export class LoginDTO {
    @Field()
    username!: string;

    @Field()
    password!: string;
}

@ObjectType('LoginResult')
export class LoginResult {
    @Field()
    success!: boolean

    @Field()
    token!: string;
}