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
    
    @Column()
    cantidad: number

    @OneToOne( () => Product, ( product) => product.id )
    product: number

    @Column()
    nombre: string

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio_unitario: number

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio_total: number

    @ManyToOne( () => User, (user) => user.id )
    user: number

    @ManyToOne( () => User, (user) => user.id )
    seller: number

    @Column({default: true})
    activo: boolean
    
    @CreateDateColumn()
    fecha_registro: Date
    
    @UpdateDateColumn()
    fecha_actualizacion: Date
}