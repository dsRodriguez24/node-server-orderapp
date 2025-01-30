import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Rol } from "./rol.entity";

@Entity()
export class User extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToOne( () => Rol, (rol) => rol.id )
    rol: number

    @Column({default: true})
    activo: boolean

    @CreateDateColumn()
    fecha_registro: Date

    @UpdateDateColumn()
    fecha_actualizacion: Date


}