import { Entity, UpdateDateColumn, CreateDateColumn,  PrimaryColumn, } from 'typeorm'
import { v4 as uuid } from "uuid";

@Entity()
export class Common {

    @PrimaryColumn()
    id: string;

    @CreateDateColumn({
        name: 'creation_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    })
    creation_at: Date;
      
    @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}