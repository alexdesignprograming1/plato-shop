import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";

import {Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem} from "./styles";

const Navbar = () => {
  return(
    <Container className="navbar-container">
      <Wrapper>
        <Left>
          <Language>BR</Language>
          <SearchContainer>
            <Input placeholder="Digite aqui que busca" />
            <Search style={{color: "gray", fontSize: 16}} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>PLATOCENTER</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>ENTRAR</MenuItem>
          <MenuItem>
            <Badge>
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export {Navbar};