import styled, { keyframes } from 'styled-components';

//! los ` funcionan como los parentesis

const P = styled.p`
  font-size: 24px;
  color: red;
`;

const Content = styled.div`
  padding: 20px 25px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? 'red' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'red')};
  padding: 10px 15px;
  border: solid 2px red;
  border-radius: 4px;
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.5);
  }

  &.secondary {
    background-color: blue;
    border: solid 2px blue;
    color: white;
  }

  .info {
    font-size: 28px;
  }
`;

//* extender componentes

const BlockButtton = styled(Button)`
  width: 100%;
  font-size: 24px;
`;

const Link = ({ className, ...props }) => {
  return <a className={className} {...props} href='#'></a>;
};

const StyledLink = styled(Link)`
  color: blue;
`;

const Input = styled.input.attrs((props) => ({
  type: 'text',
  color: props.color || 'red',
  placeholder: props.placeholder,
}))`
  font-size: 20px;
  border: 3px solid green;
  color: ${(props) => props.color};
`;

const Password = styled(Input).attrs({
  type: 'password',
})``;

const girar = keyframes`
from {
  transform: rotate(0deg);
}

to{
  transform: rotate(360deg);
}
`;

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`;

function App() {
  return (
    <Content>
      <P>hola soy un parrafo </P>
      <Button>
        Enviar <p className='info'>Info</p>{' '}
      </Button>
      <Button primary>Enviar</Button>
      <Button className='secondary'>Enviar</Button>
      <Input color='green' placeholder='hola' />
      <Password />
      <BlockButtton primary as='a' href='a'>
        Enviar
      </BlockButtton>
      <Link>Link</Link>
      <StyledLink>link Styled</StyledLink>
      <br />
      <Rotar>Estoy girando</Rotar>
    </Content>
  );
}

export default App;
