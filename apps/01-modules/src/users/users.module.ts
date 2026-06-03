import { Module, OnModuleInit } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

// @Global()
@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule implements OnModuleInit {
  constructor(private userService: UsersService) {}

  onModuleInit() {
    console.log('Users Module init');
    this.userService.AddUsersWithSeed();
  }
}
