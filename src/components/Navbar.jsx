import {Container, Wrapper, Left, Center, Right} from "./styles";

const Navbar = () => {
  return(
    <Container className="navbar-container">
      <Wrapper>
        <Left>Left</Left>
        <Center>Center</Center>
        <Right>Right</Right>
      </Wrapper>
    </Container>
  );
}

export {Navbar};