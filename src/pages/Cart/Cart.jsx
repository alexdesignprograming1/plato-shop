import { Add, Remove } from "@material-ui/icons";

import { Announcement } from "../../components/Announcement/Announcement";
import { Navbar } from "../../components/Navbar/Navbar";
import { Footer } from "../../components/Footer/Footer";

import { Container, Wrapper, Title, Top, TopButton, TopText, PriceDetail, Product, ProductColor, ProductDetail, ProductId, ProductName, ProductSize, Info, Details, Image, TopTexts, Bottom, ProductAmountContainer, ProductAmount, ProductPrice, Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle, Button, Hr } from "./styles";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>SEU CARRINHO</Title>
        <Top>
          <TopButton>CONTINUA COMPRANDO</TopButton>
          <TopTexts>  
            <TopText>Suas Compras (2)</TopText>
            <TopText>Sua lista de desejos (1)</TopText>
          </TopTexts>
          <TopButton type="filled">FINALIZAR COMPRAR</TopButton>
        </Top>
        <Bottom>
        <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn1.appsisecommerce.com.br/clientes/cliente4230/produtos/33111/Z01454417294.jpg" />
                <Details>
                  <ProductName>
                    <b>Produto:</b> AMORTECEDORES DE GOL 1.0
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>R$ 129,90</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://a-static.mlcdn.com.br/618x463/escapamento-completo-voyage-g5-1-6-8v-2009-a-2012-volkswagen/scapjaescapamentos/2143p/b055913bd0cc15d28b4708b2a6ce065f.jpg" />
                <Details>
                  <ProductName>
                    <b>Produto:</b> ESCAPAMENTO DE CELTA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                  <ProductColor color="gray" />
                  <ProductSize>
                    <b>Size:</b> 50cm
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>1</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>R$ 299,00</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>RESUMO DO PEDIDO</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal: </SummaryItemText>
              <SummaryItemPrice>R$ 429,90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Frete estimado: </SummaryItemText>
              <SummaryItemPrice>R$ 15.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Desconto: </SummaryItemText>
              <SummaryItemPrice>R$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>R$ 439,90</SummaryItemPrice>
            </SummaryItem>
            <Button>FINALIZAR PEDIDO</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container >
  );
};


export { Cart };