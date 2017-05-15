import React from 'react'

import Layout from '../../components/Layout'
import PredictionList from '../../components/PredictionList'

const Predictions = () => (
  <Layout title="Predictions" prev="/" next="/predictions/2">
    <PredictionList x={1} />
  </Layout>
)

export default Predictions
