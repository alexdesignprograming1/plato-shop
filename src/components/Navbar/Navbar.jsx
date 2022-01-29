import {Link} from "react-router-dom"; 
import styled from "styled-components";
import {Badge} from "@material-ui/core";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";

import {Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem} from "./styles";

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;

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
          <StyledLink to="/">
            <Logo>PLATOCENTER</Logo>
          </StyledLink>
        </Center>
        <Right>
        <StyledLink to="/register">
          <MenuItem>REGISTRAR</MenuItem>
        </StyledLink>
        <StyledLink to="/login">
          <MenuItem>ENTRAR</MenuItem>
        </StyledLink>
          <MenuItem>
            <StyledLink to="/cart">
              <Badge>
                <ShoppingCartOutlined />
              </Badge>
            </StyledLink>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export {Navbar};