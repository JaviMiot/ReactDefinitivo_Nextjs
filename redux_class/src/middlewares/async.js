/*
 ! es una funcion que contiene el store, es deicr contiene el state y dispatch
 ! adicional retorna una funcion que es next que llamara al siguiente middleware
 ! y este a su vez retorna la acción
 */

 export const asyncmiddleware = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      //*verifico si es una funcion
      return action(store.dispatch, store.getState);
    }
    return next(action);
  };