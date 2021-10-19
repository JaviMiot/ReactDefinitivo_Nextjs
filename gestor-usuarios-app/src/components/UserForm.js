import Input from './Input';
import Button from './Button';
import useFormulario from '../hooks/useFormulario';

const UserForn = ({ submit }) => {
  const form = {
    name: '',
    lastname: '',
    email: '',
  };
  const [formulario, handleChange, reset] = useFormulario(form);

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(formulario);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label='Name:'
        name='name'
        type='text'
        placeholder='name'
        value={formulario.name}
        onChange={handleChange}
        autoComplete='given-name'
        required
      />
      <Input
        label='Apellido:'
        name='lastname'
        type='text'
        placeholder='lastname'
        value={formulario.lastname}
        onChange={handleChange}
        autoComplete='family-name'
        required
      />
      <Input
        label='Correo:'
        name='email'
        type='mail'
        placeholder='email'
        value={formulario.email}
        onChange={handleChange}
        autoComplete='email'
        required
      />

      <Button>Enviar</Button>
    </form>
  );
};

export default UserForn;
