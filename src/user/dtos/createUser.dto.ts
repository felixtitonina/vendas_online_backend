import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  phone: string;

  @MinLength(11, {
    message: 'O CPF deve conter 11 caracteres.',
  })
  @MaxLength(11, {
    message: 'O CPF deve conter 11 caracteres.',
  })
  @IsString()
  cpf: string;

  @IsString()
  password: string;
}
