import { Add, Remove } from "@material-ui/icons";

import { Announcement } from "../../components/Announcement/Announcement";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { Newsletter } from "../../components/Newsletter/Newsletter";
import {Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Desc, FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption, AddContainer, AmountContainer, Amount, Price, Button} from "./styles";

const Product = () => {
  return(
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn1.appsisecommerce.com.br/clientes/cliente4230/produtos/33111/Z01454417294.jpg"/>
        </ImgContainer>
        <InfoContainer>
          <Title>Amortecedor Gol</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </Desc>
          <Price>R$ 129,90</Price>
          {/* <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer> */}
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD AO CARRINHO</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};


export {Product};