import React from "react";

import Slide from "../../components/Slide";
import PredictionList from "../../components/PredictionList";

const Predictions = () => (
  <Slide title="Predictions" prev="/predictions/1" next="/predictions/3">
    <PredictionList step={2} />
  </Slide>
);

export default Predictions;
