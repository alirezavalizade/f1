import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [selectedSeason, selectSeason] = useState(null);

  return (
    <AppContext.Provider
      value={{
        selectedSeason,
        selectSeason
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export const useAppState = () => useContext(AppContext);
