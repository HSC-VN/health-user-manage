import { IUser } from "@longlv91/healthcare-common";
import { ApiProperty } from "@nestjs/swagger";
import { ArrayMaxSize, ArrayMinSize, IsDate, IsEmail, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'hc_user'})
export class UserEntity implements IUser {

    @PrimaryGeneratedColumn('uuid')
    @IsString()
    @ApiProperty()
    id: string;

    @Column()
    @IsString()
    @ApiProperty()
    username: string;

    @Column()
    @IsString()
    password: string;

    @Column()
    @IsString()
    @ApiProperty()
    lastName: string;

    @Column()
    @IsString()
    @ApiProperty()
    firstName: string;

    @Column()
    @IsString()
    status: string;

    @Column()
    @IsEmail()
    @ApiProperty()
    email: string;

    @Column()
    @IsString()
    @ApiProperty()
    @ArrayMinSize(1)
    @ArrayMaxSize(100)
    age: number;

    @Column()
    @IsString()
    @ApiProperty()
    address: string;

    @Column()
    @IsString()
    @ApiProperty()
    active: boolean;

    @Column()
    @IsString()
    createdBy: string;

    @Column()
    @IsString()
    @ApiProperty()
    modifiedBy: string;

    @Column()
    @IsDate()
    @ApiProperty()
    createdDate: Date;

    @Column()
    @IsDate()
    @ApiProperty()
    modifiedDate: Date;

    getUserId(): string {
        return this.id;
    }

    getUserName(): string {
        return this.username;
    }

    getUserEmail(): string {
        return this.email;
    }

    getUserPassword(): string {
        return this.password;
    }

    getAge(): number {
        return this.age;
    }

    getAddress(): string {
        return this.address;
    }

    isActive(): boolean {
        return this.active;
    }

    getLastName(): string {
        return this.lastName;
    }

    getFirstName(): string {
        return this.firstName;
    }

    getStatus(): string {
        return this.status;
    }

    getCreatedDate(): Date {
        return this.createdDate;
    }

    getModifiedDate(): Date {
        return this.modifiedDate;
    }

    setUserName(username: string): void {
        this.username = username;
    }

    setUserEmail(email: string): void {
        this.email = email;
    }

    setUserPassword(password: string): void {
        this.password = password;
    }

    setAge(age: number): void {
        this.age = age;
    }

    setAddress(address: string): void {
        this.address = address;
    }

    setFirstName(firstName: string): void {
        this.firstName = firstName;
    }

    setLastName(lastName: string): void {
        this.lastName = lastName;
    }

    enableUser(active: boolean): void {
        this.active = active;
    }

}