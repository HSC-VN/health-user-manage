import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserManagementService } from './user-management.service';
import { UserEntity } from './dto/user.entity';
import { UserManagementController } from './user.management.controller';
 
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserManagementController],
  providers: [UserManagementService],
})
export class UserManagementModule {}