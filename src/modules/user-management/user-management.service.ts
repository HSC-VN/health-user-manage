import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "./dto/user.entity";

@Injectable()
export class UserManagementService {
    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>
    ) {}

    findAll(): Promise<UserEntity[]> {
        return this.repository.find();
    }
    
    findOne(id: string): Promise<UserEntity> {
        return this.repository.findOne(id);
    }

    createUser(user: UserEntity): Promise<UserEntity> {
        const userDto = this.repository.create(user)
        return this.repository.save(userDto);
    }
    
    async remove(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}