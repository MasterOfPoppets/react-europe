import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const H1 = styled.h1`
  color: palevioletred;
`;

const List = styled.ul`
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 24px;
`;

const PredictionList = ({ x }) => (
  <Wrapper>
    <H1>Pre-conference Predictions</H1>
    <List>
      <ListItem>Strongly-typed languages compiling to JS</ListItem>
      {x > 1 && <ListItem>Tooling</ListItem>}
      {x > 2 && <ListItem>UI Performance  - Fiber, WebAssembly</ListItem>}
    </List>
  </Wrapper>
);

export default PredictionList;
