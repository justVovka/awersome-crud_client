import React, { FC } from 'react';
import { Provider } from 'react-redux';

import List from '@app/List';
import { store } from '@app/store';

const App:FC = ():JSX.Element => (
    <Provider store={store}>
      <div>
        <h1>Application CRUD</h1>
        <List />
      </div>
    </Provider>
  );

export default App;
