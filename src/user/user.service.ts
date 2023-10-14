import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userrepository: Repository<UserEntity>,
  ) {}
  async crateUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    return this.userrepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHash,
    });
  }
  async getAllUser(): Promise<UserEntity[]> {
    return this.userrepository.find();
  }
}
