import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  AddUsersWithSeed(): string {
    return 'Added Seed Inject';
  }
}
