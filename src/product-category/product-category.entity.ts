import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductCategoryEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;
}