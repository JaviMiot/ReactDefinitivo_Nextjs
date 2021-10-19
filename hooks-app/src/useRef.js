import { useRef } from 'react';

const App = () => {
  const ref = useRef();
  const inputRef = useRef();

  const click = () => {
    console.log(ref.current.clientHeight);
    ref.current.innerHTML = 'hola javi';
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div onClick={click} ref={ref}>
        lala
      </div>

      <div>
        <input ref={inputRef} />
        <button onClick={focus}>focus</button>
      </div>
    </>
  );
};

export default App;
