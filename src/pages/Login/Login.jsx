import {Navbar} from '../../components/Navbar/Navbar';
import {Footer} from '../../components/Footer/Footer';

import {Container, Wrapper, Title, Form, Input, Button, Link} from "./styles";

const Login = () => {
  return(
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>ENTRAR</Title>
          <Form>
            <Input placeholder="Digite seu email" />
            <Input placeholder="Digite sua senha" />
            <Button>Entrar </Button>
            <Link>Não tem conta? registrar</Link>
            <Link>Esqueceu sua senha? Clique aqui</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};


export {Login};