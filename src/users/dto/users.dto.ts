import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, InputType, ID, Field } from '@nestjs/graphql';

@ObjectType('Users')
export class UsersDTO {
    @IDField(() => ID)
    username!: string;

    @Field()
    role!: string;

}

@InputType('UsersInput')
export class UsersInput {
    @IDField(() => ID)
    username!: string;

    @Field()
    role!: string;

    @Field()
    password!: string;

}
