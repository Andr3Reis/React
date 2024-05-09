import "./App.css";
import { Card } from "./components/Card";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 50px;
`;

function App() {
  return (
    <Container>
      <Card title="Teste" content="Teste2" />
      <Card title="Teste" content="Teste2" />
    </Container>
  );
}

export default App;
