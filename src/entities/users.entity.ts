import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    constructor () {
        if (!this.id) {
        this.id = uuidv4()
        }
    }

}