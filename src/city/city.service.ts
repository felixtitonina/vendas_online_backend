import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CacheService } from 'src/cache/cache.service';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepocitory: Repository<CityEntity>,
    private readonly cacheService: CacheService,
  ) {}
  async getAllCitiesByStateId(stateId: number): Promise<CityEntity[]> {
    return this.cacheService.getCache<CityEntity[]>(`state_${stateId}`, () =>
      this.cityRepocitory.find({
        where: {
          stateId,
        },
      }),
    );
  }

  async findCityById(cityId: number): Promise<CityEntity> {
    const city = await this.cityRepocitory.findOne({
      where: {
        id: cityId,
      },
    });
    if (!city) {
      throw new NotFoundException('Cidade não encontrada.');
    }
    return city;
  }
}
