import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { IsEmail, Min, Max, IsNotEmpty, Matches } from "class-validator";
import { regexHelper } from "../helpers/regex.helper";
import { MessageHelper } from "../helpers/message.helper";
import { Common } from "./Common";

@Entity("categories")
export class User extends Common {

    @Column()
    @IsNotEmpty()
    name: string;

    @Column()
    @IsNotEmpty()
    last_name: string;

    @Column()
    @Min(8)
    @Max(20)
    @IsNotEmpty()
    @Matches(regexHelper.password, {message: MessageHelper.PASSWORD_VALID})
    password: string;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email: string;

}