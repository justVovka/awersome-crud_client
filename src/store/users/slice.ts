import { User } from '@app/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UserState } from '@store/users/types';
import { UsersApi } from '@utils/api/users';

const initialState: UserState = {
  users: [] as User[],
};

export const getAllUsers = createAsyncThunk<void>(
  'GET_ALL_USERS',
  async (_: void, { dispatch }) => await UsersApi.getAll()
      .then((data: User[]) => {
        dispatch(setUsers(data));
      })
)

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, { payload } : PayloadAction<User[]>) => {
      state.users = payload
    }
  }
});

export const {
  reducer,
  actions: {
    setUsers
  }
} = userSlice;

export default reducer;
