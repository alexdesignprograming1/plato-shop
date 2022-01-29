import { Announcement } from "../../components/Announcement/Announcement";
import { Navbar } from "../../components/Navbar/Navbar";
import { Products} from "../../components/Products/Products";
import { Footer } from "../../components/Footer/Footer";
import { Newsletter } from "../../components/Newsletter/Newsletter";

import {Container, Title, FilterContainer, Filter, FilterText, Select, Option} from "./styles";

const ProductList = () => {
  return(
    <Container>
      <Navbar />
      <Announcement />
      <Title>Amortecedores</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Ordenar produtos:</FilterText>
          <Select>
            <Option selected>Recentes</Option>
            <Option>Preço (asc)</Option>
            <Option>Preço (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};


export {ProductList};