import { stateMock } from '../../state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityMock: CityEntity = {
  createdAt: new Date(),
  id: 23123,
  name: 'cidade',
  stateId: stateMock.id,
  updatedAt: new Date(),
};
