import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity("contato")
export class Contato {

    @PrimaryGeneratedColumn()
    id: number

    @Column({length:45, nullable:false})
    nome: string

    @Column({nullable:false})
    telefone: number

}
