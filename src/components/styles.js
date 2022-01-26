import styled from "styled-components";

const Container = styled.div` 
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

export {Container, Wrapper, Left, Center, Right};