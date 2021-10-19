import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  width: 300px;
  height: 350px;
  border-radius: 16px;
  box-shadow: 2px 4px 2px rgba(0, 0, 0, 0.4);
`;

const P = styled.p`
  color: blue;
`;

const Descript = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a123;
  width: 100%;
`;

const Button = styled.button`
  background-color: ${(props) =>
    props.background ? props.background : 'white'};
  border: 1px solid red;
  height: 35px;
  width: 90px;
  border-radius: 4px;
  margin-bottom: 4px;
  text-align: center;
  box-sizing: border-box;
  color: ${(props) => (props.color ? props.color : 'black')};
  padding: 2px 5px;
`;

const ButtonLarge = styled(Button)`
  width: 100%;
`;

const Parraph = ({ className, ...props }) => {
  return (
    <p className={className} {...props}>
      Hola
    </p>
  );
};

const StyleP = styled(Parraph)`
  color: red;
`;

const App = () => {
  return (
    <Container>
      <P>Hola</P>

      <Descript>
        <Button>enviar</Button>
        <ButtonLarge as='a' href='#' background='blue' color='white'>
          Largo
        </ButtonLarge>
      </Descript>

      <StyleP />
    </Container>
  );
};

export default App;
