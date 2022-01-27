import { Send } from "@material-ui/icons";

import {Container, Title, Desc, InputContainer, Input, Button} from "./styles";

const Newsletter = () => {
  return(
    <Container>
      <Title>Notícias</Title>
      <Desc>Get time updates from your favorites products</Desc>
      <InputContainer>
        <Input />
          <Button>
            <Send />
          </Button>
      </InputContainer>
    </Container>
  )
}

export {Newsletter}