import "./App.css";
import styled from "styled-components";
import { Card } from "./components/Card";
import { Contador } from "./components/Contador";

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

function App() {
  return (
    <Container>
      <Card title="Teste" content="Teste2" />
      <Card title="Teste" content="Teste2" />
      <Contador />
    </Container>
  );
}

export default App;
