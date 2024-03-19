"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { GlobalStateContextType, GlobalState } from '../types/types';

// Sets up global context to retain user-selected search, current page, and
// category when navigating back from the detail page to the index page.

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    page: 1,
    searchTerm: "",
    currentSearchTerm: "",
    category: "All"
  });

  return (
    <GlobalStateContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};