import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  width: 30%;
  min-width: 350px;
  padding: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: -1px 1px 10px 1px rgba(0,0,0,0.16);
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 4px;
  min-width: 50%;
  margin: 10px 0px;
  padding: 10px;
  border: 1px solid #f1f1f1;
  &:focus{
    outline: 1px solid rgba(18,84,207,0.50);
  }
`;

const Agreement = styled.span`
  font-size: 0.75rem;
  margin: 20px 0;
`;

const Button = styled.button`
  min-width: 300px;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: #1254cf;
  color: #fff;
  margin-bottom: 10px;
  margin-top: 10px;
  cursor: pointer;
  transition: ease-in 0.3s;
  &:hover{
    background-color: #0f409b;
    color: #f3f3f3;
  }
`;

const Link = styled.a`
  margin: 5px 0;
  font-size: 0.75rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #1254cf;
  }
`;

export {Container, Wrapper, Title, Form, Input, Button, Link, Agreement};