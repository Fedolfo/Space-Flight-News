import MyContext from '../context/MyContext';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Provider: React.FC<Props> = ({ children }) => {
  const contextValue = {

  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}


export default Provider;
