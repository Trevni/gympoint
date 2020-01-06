import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import '~/config/ReactotronConfig';

import { store, persistor } from './store';
import App from './App';
import StatusBar from './components/StatusBar/index';

export default function Index() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar />
        <App />
      </PersistGate>
    </Provider>
  );
}
