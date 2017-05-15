import React from 'react'

import Layout from '../../components/Layout'
import PredictionList from '../../components/PredictionList'

const Predictions = () => (
  <Layout title="Predictions" prev="/predictions/1" next="/predictions/3">
    <PredictionList x={2} />
  </Layout>
)

export default Predictions
