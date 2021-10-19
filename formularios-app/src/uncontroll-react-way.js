import { useRef } from 'react';

const App = () => {
  const inputRef = useRef();
  const fileRef = useRef();

  const submit = () => {
    console.log(inputRef.current.value);
    console.log(fileRef.current.files[0]);

    const form = new FormData();
    form.append('archivo', fileRef.current.files[0]);
    form.append('campo', inputRef.current.value);

    fetch('lala', { method: 'POST', body: form });
  };

  return (
    <div>
      <div>
        <span>lala</span>
        <input name='campo' ref={inputRef} />
        <input type='file' name='file' ref={fileRef} />
        <input type='submit' value='enviar' onClick={submit} />
      </div>
    </div>
  );
};

export default App;
