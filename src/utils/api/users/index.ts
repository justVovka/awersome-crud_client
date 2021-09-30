import { User } from '@app/types';

import axiosInstance from '../../axios';

export const UsersApi = {
  async getAll(): Promise<User[]> {
    return await axiosInstance.get<User[]>('api/v1/users/')
      .then(response => response.data)
      .catch(error => error);
  },
};
