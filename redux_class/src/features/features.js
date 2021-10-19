import { combineReducers } from 'redux';
import {
  makingFetchingReducer,
  makeSetReducer,
  reduceReducers,
  makeCrudReducer,
  mac,
  mat,
  asyncMac,
} from './utils';

const asyncTodos = mat('TODOS');

const [setPending, setFulFilled, setError] = asyncMac(asyncTodos);

export const setComplete = mac('TODO/COMPLETE', 'payload');
export const setFilter = mac('FILTER/SET', 'payload');

//? envio una funcion como accion
export const fetchThunk = () => async (dispatch) => {
  dispatch(setPending());

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    const todos = data.slice(0, 10);
    dispatch(setFulFilled(todos));
  } catch (err) {
    dispatch(setError(err.message));
  }
};

export const fetchingReducer = makingFetchingReducer(asyncTodos);

export const filterReducer = makeSetReducer(['FILTER/SET']);

const fullFillReducer = makeSetReducer(['TODOS/FULFILLED']);

const crudReducer = makeCrudReducer(['TODO/ADD', 'TODO/COMPLETE']);
export const todoReducer = reduceReducers(crudReducer, fullFillReducer);

//* agrego el reducer, nota que agredo el reducer de fet dento de todos
export const reducer = combineReducers({
  todos: combineReducers({ entities: todoReducer, status: fetchingReducer }),
  filter: filterReducer,
});

export const selectTodos = (state) => {
  const {
    todos: { entities },
    filter,
  } = state;

  if (filter === 'complete') {
    return entities.filter((todo) => todo.complete);
  }
  if (filter === 'incomplete') {
    return entities.filter((todo) => !todo.complete);
  }
  if (filter === 'all') {
    return entities;
  }
};

export const selectStatus = (state) => state.todos.status;
