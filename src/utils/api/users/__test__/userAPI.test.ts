import mockUsers from '@mocks/users.json';

import { UsersApi } from '../index';

describe('Users API', () => {

  test('getAll should return Array of users', async () => {
    const response = mockUsers;
    return UsersApi.getAll()
      .then(data => {
        expect(data).toEqual(response);
      });
  });
});
