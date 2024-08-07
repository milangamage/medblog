'use client'
import React, { createContext, useContext } from 'react';
import useFetchAllDivisionData from '@/hooks/useFetchAllDivisionData';

interface DivisionContextType {
  divisionData: any;
  divisionDataLoading: boolean;
}

const DivisionContext = createContext<DivisionContextType | undefined>(undefined);

export const DivisionContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { divisionData, divisionDataLoading } = useFetchAllDivisionData();
  
  return (
    <DivisionContext.Provider value={{ divisionData, divisionDataLoading }}>
      {children}
    </DivisionContext.Provider>
  );
};

export const useDivisionContext = () => {
  const context = useContext(DivisionContext);
  if (!context) {
    throw new Error('useDivisionContext must be used within a DivisionContextProvider');
  }
  return context;
};
