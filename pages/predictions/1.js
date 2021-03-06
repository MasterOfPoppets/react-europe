import React from "react";

import Slide from "../../components/Slide";
import PredictionList from "../../components/PredictionList";

const Predictions = () => (
  <Slide title="Predictions" prev="/" next="/predictions/2">
    <PredictionList step={1} />
  </Slide>
);

export default Predictions;
