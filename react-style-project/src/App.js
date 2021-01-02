import React from "react";
import styled from "styled-components";
import './App.css';
import Card from "./components/card.component";

const Text = styled.div`
  color: red;
  font-size: 28px;
  border-bottom: 
    ${({ isActive }) => isActive ? '1px solid black' : '3px dashed blue'}
`;

function App() {
  return (
    <div className="App">
      <Card>
        <Text isActive={false}>Hello, how are you?</Text>
      </Card>
    </div>
  );
}

export default App;
