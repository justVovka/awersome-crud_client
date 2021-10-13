import React, { useEffect } from 'react';

import { RootState } from '@app/store';
import { getAllUsers } from '@store/users/slice';
import { useLocalDispatch, useLocalSelector } from '@utils/hooks/useRedux';

const List = ():JSX.Element => {
  const { users } = useLocalSelector((state: RootState) => state.users);
  const dispatch = useLocalDispatch();

  const updateUsers = (): void => {
    dispatch(getAllUsers());
  };

  useEffect(updateUsers, []);

  return (
    <pre>
      {JSON.stringify(users, null, 2)}
    </pre>
  );
};

export default List;
