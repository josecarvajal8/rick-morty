/* eslint-disable prettier/prettier */
import React from 'react';
import { Router } from './router';
import { AppProvider } from './flux/context';
function App(): JSX.Element {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}
export default App;
