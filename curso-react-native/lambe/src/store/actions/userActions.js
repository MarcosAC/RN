//Importação das constantes ActionTypes.
import {USER_LOGGED_IN, USER_LOGGED_OUT} from './actionTypes';

/***********/
/* Actions */
/***********/

//Action login
export const login = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

//Action logout.
export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
