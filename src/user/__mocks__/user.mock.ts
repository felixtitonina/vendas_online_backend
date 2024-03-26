import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type.enum';

export const userEntityMock: UserEntity = {
  cpf: '43047717877',
  createdAt: new Date(),
  email: 'user@example.com',
  id: 1,
  name: 'nameMock',
  password: 'passwordMock',
  phone: '11985522347',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
