import { Container, Info, Circle, Image, Icon } from "./styles";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";

const Product = ({item}) => {
  return(
    <Container>
      <Circle />
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export {Product};