import React from 'react'

import Layout from '../../components/Layout'
import PredictionList from '../../components/PredictionList'

const Predictions = () => (
  <Layout title="Predictions" prev="/predictions/2">
    <PredictionList x={3} />
  </Layout>
)

export default Predictions
