import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType('Users')
export class UsersDTO {
    @IDField(() => ID)
    username!: string;

    @Field()
    role!: string;

    @Field()
    id!: number;

}
