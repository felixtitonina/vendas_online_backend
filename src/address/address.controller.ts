import { AddressService } from './address.service';
import { Body, Controller, Post, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { AddressEntity } from './entities/address.entity';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { Roles } from 'src/decorator/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}
  @Roles(UserType.User)
  @Post('/:userId')
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @Param('userId') userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
