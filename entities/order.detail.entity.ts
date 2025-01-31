import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity()
export class OrderDetail extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne( () => Order, ( order) => order.id )
    order: number
    
    @OneToOne( () => Product, ( product) => product.id )
    product: number

    @Column()
    nombre: string

    @Column()
    precio: string

    @ManyToOne( () => User, (user) => user.id )
    user: number

    @ManyToOne( () => User, (user) => user.id )
    customer: number

    @Column({default: true})
    activo: boolean
    
    @CreateDateColumn()
    fecha_registro: Date
    
    @UpdateDateColumn()
    fecha_actualizacion: Date
}