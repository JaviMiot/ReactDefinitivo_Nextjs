import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import TextInput from './components/TextInput';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import Radio from './components/Radio';

const validate = (values) => {
  const errors = {};

  if (values.name.length < 5) {
    errors.name = 'debe ser mayor a 5 caracteres';
  }

  if (values.lastname.length < 18) {
    errors.lastname = 'debe ser mayor a 18 caracteres';
  }

  if (!values.email.includes('@')) {
    errors.email = 'debe ser email valido';
  }

  if(!values.radio){
    errors.radio = 'selecciona una opcion'
  }

  return errors;
};

const App = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        lastname: '',
        email: '',
        select: '',
        radio:''
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validate={validate}
    >
      <Form>
        <TextInput name='name' label='nombre' />
        <TextInput label='lastname:' name='lastname' />
        <TextInput label='email:' name='email' />

        <Select label='area' name='area'>
          <option value=''>Seleccione</option>
          <option value='electronica'>Electronica</option>
          <option value='jorge'>Jorge</option>
        </Select>

        <Radio label='feliz' name='radio' value='feliz' />
        <Radio label='triste' name='radio' value='triste' />
        <Radio label='enojado' name='radio' value='enojado' />
        <ErrorMessage name='radio' />

        <Checkbox name='check'>Aceptar terminos y condiciones</Checkbox>
        <button type='submit'>Enviar</button>
      </Form>
    </Formik>
  );
};

export default App;
