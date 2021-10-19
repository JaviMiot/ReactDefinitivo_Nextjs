import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Input from './components/Input';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Section } from './components/Section';
import { Balance } from './components/Balance';

const MsgErrors = {
  type: 'Debe ser un número',
  maxRate: 'El valor máximo es 1',
  minRate: 'El valor mínimo es 0',
};
const compoundInterest = (deposit, contributions, years, rate) => {
  let total = deposit;

  for (let i = 0; i < years; i++) {
    total = (total + contributions) * (rate + 1);
  }

  return Math.round(total);
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const App = () => {
  const [balance, setBalance] = useState('');
  const handleSubmit = ({ deposit, contributions, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contributions),
      Number(years),
      Number(rate)
    );

    setBalance(formatter.format(val));
  };

  return (
    <Container>
      <Section>
        <Formik
          initialValues={{
            deposit: '',
            contributions: '',
            years: '',
            rate: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number()
              .required('Obligatorio')
              .typeError(MsgErrors.type),
            contributions: Yup.number()
              .required('Obligatorio')
              .typeError(MsgErrors.type),
            years: Yup.number()
              .required('Obligatorio')
              .typeError(MsgErrors.type),
            rate: Yup.number()
              .required('Obligatorio')
              .typeError(MsgErrors.type)
              .min(0, MsgErrors.minRate)
              .max(1, MsgErrors.maxRate),
          })}
        >
          <Form>
            <Input name='deposit' label='Deposito Inicial' />
            <Input name='contributions' label='Contribución Anual' />
            <Input name='years' label='Años' />
            <Input name='rate' label='Interes' />
            <Button type='submit'>Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
};

export default App;
