import PropTypes from 'prop-types';
import MyContext from '../context/MyContext';

function Provider({ children }) {

  const contextValue = {

  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node,
}.isRequired;

export default Provider;
