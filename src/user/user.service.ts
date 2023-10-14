import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private users: User[] = [];
  async crateUser(createUserDto: CreateUserDto): Promise<User> {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    console.log('passwordHash', passwordHash);
    const user: User = {
      ...createUserDto,
      id: this.users.length + 1,
      password: undefined,
    };
    this.users.push(user);
    return user;
  }
  async getAllUser(): Promise<User[]> {
    return this.users;
  }
}
