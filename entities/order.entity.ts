import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

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