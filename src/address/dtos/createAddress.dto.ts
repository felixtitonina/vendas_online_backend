import { IsInt, IsOptional, IsString } from 'class-validator';

export class CreateAddressDto {
  //   id;
  // user_id;
  @IsString()
  @IsOptional()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;

  //   created_at;
  //   updated_at;
}
