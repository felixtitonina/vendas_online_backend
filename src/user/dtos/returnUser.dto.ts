import { UserEntity } from './../entities/user.entity';
export class ReturnUserDto {
  id: number;
  name: string;
  email: string;
  phone: string;
  cpf: string;
  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name.toUpperCase();
    this.email = userEntity.email.toUpperCase();
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }
}
