import {Navbar} from '../../components/Navbar/Navbar';
import {Footer} from '../../components/Footer/Footer';

import {Container, Wrapper, Title, Form, Input, Button, Link, Agreement} from "./styles";

const Register = () => {
  return(
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Title>ENTRAR</Title>
          <Form>
            <Input placeholder="Nome" />
            <Input placeholder="Sobrenome" />
            <Input placeholder="Email" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirma senha" />
            <Agreement>
              Ao criar uma conta, concordo com o processamento dos 
              meus dados pessoais dados de acordo com o <b>POLÍTICA DE PRIVACIDADE</b>
            </Agreement>
            <Button>CRIAR CONTA</Button>
            <Link>Já tenho conta, clique aqui para entrar</Link>
          </Form>
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
};


export {Register};