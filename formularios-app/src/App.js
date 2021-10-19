import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState({
    normal: 'Por defecto',
    texto: '',
    select: '',
    check: false,
    estado: 'triste',
  });

  const handleChange = ({ target }) => {
    //* forma 1
    /* setValue({
      ...value,
      [e.target.name]: e.target.value,
    }); */

    //* froma 2

    setValue((state) => ({
      ...state,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  };

  console.log(value);

  return (
    <div>
      {value.length < 5 ? <span>Longitud minima de 5</span> : null}

      <input
        name='normal'
        type='text'
        value={value.normal}
        onChange={handleChange}
      />

      <textarea name='texto' value={value.texto} onChange={handleChange} />

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''>Seleccione</option>
        <option value='manzana'>Manzana</option>
        <option value='banana'>Banana</option>
        <option value='manzana'>Manzana</option>
      </select>

      <input
        type='checkbox'
        name='check'
        onChange={handleChange}
        checked={value.check}
      />

      <div>
        <label>Chancho </label>
        <input
          checked={value.estado === 'feliz'}
          onChange={handleChange}
          type='radio'
          value='feliz'
          name='estado'
        />{' '}
        feliz
        <input
          checked={value.estado === 'triste'}
          onChange={handleChange}
          type='radio'
          value='triste'
          name='estado'
        />{' '}
        triste
        <input
          checked={value.estado === 'enojado'}
          onChange={handleChange}
          type='radio'
          value='enojado'
          name='estado'
        />{' '}
        enojado
      </div>
    </div>
  );
};

export default App;
