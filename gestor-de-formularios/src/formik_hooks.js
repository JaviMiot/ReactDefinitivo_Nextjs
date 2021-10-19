import React from 'react';
import { useFormik } from 'formik';

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
  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
  });

  console.log(formik.touched.name);
  console.log(formik.errors.name);
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre:</label>
      <input type='text' {...formik.getFieldProps('name')} />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}

      <label>Apellido:</label>
      <input type='text' {...formik.getFieldProps('lastname')} />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}

      <label>Email:</label>
      <input type='email' {...formik.getFieldProps('email')} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <button type='submit'>Enviar</button>
    </form>
  );
};

export default App;
