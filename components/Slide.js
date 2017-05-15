import React, { Component } from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";

const SlideWrapper = styled.div`
  margin: auto;
  width: 750px;
`;

const Button = styled.button`
  align-items: center;
  background: palevioletred;
  border: 0;
  border-radius: 2px;
  box-sizing: border-box;
  color: papayawhip;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  margin: 0 0 0 5px;
  min-height: 32px;
  padding: 0 8px;
`;

const Footer = styled.div`
  bottom: 0;
  margin: 20px;
  position: fixed;
  right: 0;
`;

const Title = styled.h1`
  color: palevioletred;
  font-size: 50px;
  text-align: center;
`;

class Slide extends Component {
  handleNext = () => {
    Router.push({ pathname: this.props.next });
  };

  handlePrev = () => {
    Router.push({ pathname: this.props.prev });
  };

  render() {
    return (
      <SlideWrapper onClick={this.handlePage}>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <Title>{this.props.title}</Title>
        {this.props.children}
        <Footer>
          {this.props.prev && <Button onClick={this.handlePrev}>&lt;</Button>}
          {this.props.next && <Button onClick={this.handleNext}>&gt;</Button>}
        </Footer>
      </SlideWrapper>
    );
  }
}

export default Slide;
