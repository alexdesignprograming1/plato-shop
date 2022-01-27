import {Button, Container, Image, Info, Title} from "./styles";

const CategoryItem = ({item}) => {
  return(
   <Container>
     <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>COMPRAR AGORA</Button>
      </Info>
   </Container>
  );
};

export {CategoryItem};