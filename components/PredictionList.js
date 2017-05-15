import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: palevioletred;
`;

const List = styled.ul`
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 24px;
`;

const PredictionList = ({ step }) => (
  <List>
    <ListItem>Strongly-typed languages compiling to JS</ListItem>
    {step > 1 && <ListItem>Tooling</ListItem>}
    {step > 2 && <ListItem>UI Performance  - Fiber, WebAssembly</ListItem>}
  </List>
);

export default PredictionList;
