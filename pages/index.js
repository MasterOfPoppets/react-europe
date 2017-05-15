import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Title = styled.h1`
  color: palevioletred;
  font-size: 50px;
  text-align: center;
`

export default () => (
  <Layout title="PWG @ ReactEurope" next="/predictions">
    <Title>PWG @ ReactEurope</Title>
  </Layout>
)
