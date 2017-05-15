import React, { Component } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import styled from 'styled-components'

const LayoutWrapper = styled.div`
  margin: auto;
  width: 750px;
`

const Footer = styled.div`
  bottom: 0;
  margin: 20px;
  position: fixed;
  right: 0;
`

class Layout extends Component {
  handleNext = () => {
    Router.push({ pathname: this.props.next })
  }

  handlePrev = () => {
    Router.push({ pathname: this.props.prev })
  }

  render() {
    return (
      <LayoutWrapper onClick={this.handlePage}>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        {this.props.children}
        <Footer>
          {this.props.prev && <button onClick={this.handlePrev}>Prev</button>}
          {this.props.next && <button onClick={this.handleNext}>Next</button>}
        </Footer>
      </LayoutWrapper>
    )
  }
}

export default Layout
