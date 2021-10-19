import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchThunk,
  setComplete,
  setFilter,
  selectTodos,
  selectStatus,
} from './features/features';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li
      style={{
        textDecoration: todo.complete ? 'line-through' : 'none',
        cursor: 'pointer',
      }}
      onClick={() => dispatch(setComplete(todo))}
    >
      {todo.title}
    </li>
  );
};

const App = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);

  const submit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    const id = Math.random().toString(36);
    const todo = { title: value, complete: false, id };
    dispatch({ type: 'TODO/ADD', payload: todo });
    setValue('');
  };

  if (status.loading === 'pending') {
    return <p>Cargando</p>;
  }

  if (status.loading === 'error') {
    return <p>{status.error}</p>;
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </form>
      <button onClick={() => dispatch(setFilter('all'))}>Mostrar todos</button>
      <button onClick={() => dispatch(setFilter('complete'))}>
        Completados
      </button>
      <button onClick={() => dispatch(setFilter('incomplete'))}>
        Incompletos
      </button>
      <button onClick={() => dispatch(fetchThunk())}>fetch</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
