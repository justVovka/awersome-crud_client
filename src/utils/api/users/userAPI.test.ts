import { User } from '../../../types';
import { UsersApi } from './index';

describe('User API', () => {
  // TODO test coverage USER API
  test('getAll should return Array of users', () => {
    UsersApi.getAll().then((data:User[]) => {
      expect(data).toBeInstanceOf(Array);
    })
  })
})
