import { Facebook, Instagram, MailOutline, Room, Phone, WhatsApp } from "@material-ui/icons";

import {Container, Left, Logo, Desc, SocialContainer, SocialIcon, Center, Title, List, ListItem, Right, ContactItem, Payment} from "./styles";

const Footer = () => {
  return(
    <Container>
      <Left>
        <Logo>PlatoCenter</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999"><Facebook /></SocialIcon>
          <SocialIcon color="E4405F"><Instagram /></SocialIcon>
          <SocialIcon color="07b534"><WhatsApp /></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Links Úteis</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Carrinho</ListItem>
          <ListItem>Peças</ListItem>
          <ListItem>Serviços</ListItem>
          <ListItem>Acessorios</ListItem>
          <ListItem>Minha Conta</ListItem>
          <ListItem>Rastreamento de Pedidos</ListItem>
          <ListItem>Lista de Desejos</ListItem>
          <ListItem>Termos</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contatos</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Av. Mauricio de Nassau, 131 Iputinga - Recife - PE
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +55 (81) 99999-9999
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> platocenterrecife@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export {Footer};