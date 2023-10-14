import { StateEntity } from './entities/address.entity';
import { StateService } from './state.service';
import { Controller, Get } from '@nestjs/common';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Get()
  async getAllState(): Promise<StateEntity[]> {
    return this.stateService.getAllState();
  }
}
