import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity()
export class OrderDetail extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // Relación ManyToOne con Order
    @ManyToOne(() => Order, (order) => order.id)
    order: number; 
    
    @Column()
    cantidad: number;

    // Relación OneToOne con Product
    @OneToOne(() => Product, (product) => product.id)
    product: Product;  // Cambiado a Product, no a number

    @Column()
    nombre: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio_unitario: number;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    precio_total: number;

    // Relación ManyToOne con User (user)
    @ManyToOne(() => User, (user) => user.id)
    user: User;  // Cambiado a User, no a number

    // Relación ManyToOne con User (seller)
    @ManyToOne(() => User, (user) => user.id)
    seller: User;  // Cambiado a User, no a number

    @Column({ default: true })
    activo: boolean;

    @CreateDateColumn()
    fecha_registro: Date;

    @UpdateDateColumn()
    fecha_actualizacion: Date;
}
