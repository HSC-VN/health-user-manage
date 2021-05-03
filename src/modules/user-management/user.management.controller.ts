import { Body, Controller, Get, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserEntity } from "./dto/user.entity";
import { UserManagementService } from "./user-management.service";

@Controller()
@ApiTags('User Management')
export class UserManagementController {
    constructor(private userService: UserManagementService) {}
    
    @Get('/users')
    getAllUsers() {
        return this.userService.findAll();
    }

    @Post('/users')
    createUser(@Body() user: UserEntity) {
        return this.userService.createUser(user);
    }
}