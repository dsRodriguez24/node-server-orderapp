import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre : string;

}