import React from 'react';
import { GlobalCountProvider } from './useGlobalCountState';

const AppProvider= ({ children }) => (
  <GlobalCountProvider>{children}</GlobalCountProvider>
);

export default AppProvider;