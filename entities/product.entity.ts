import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string

    @Column()
    codigo: string

    @Column()
    precio_compra: string

    @Column()
    precio_venta: string

    @Column()
    stock: number

    @ManyToOne( () => User, (user) => user.id )
    user_id: number

    @Column({default: true})
    activo: boolean

    @CreateDateColumn()
    fecha_registro: Date
    
    @UpdateDateColumn()
    fecha_actualizacion: Date
}