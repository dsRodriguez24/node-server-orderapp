import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string

    @Column()
    rol: number

    @Column()
    activo: boolean

    @CreateDateColumn()
    fecha_registro: Date

    @UpdateDateColumn()
    fecha_actualizacion: Date


}