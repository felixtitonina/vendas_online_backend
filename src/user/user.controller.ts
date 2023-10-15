import { UserService } from './user.service';
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.crateUser(createUserDto);
  }

  @Get()
  async getAllUser(): Promise<ReturnUserDto[]> {
    return (await this.userService.getAllUser()).map((UserEntity) => new ReturnUserDto(UserEntity));
  }
}
