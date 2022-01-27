import styled from "styled-components";

const Container = styled.div` 
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 0.875rem;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid #d3d3d3;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  display: flex; 
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size:  1rem;
  cursor: pointer;
  margin-left: 25px;
`;

export {Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem};