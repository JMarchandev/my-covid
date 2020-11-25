import React from "react";
import TickerComponent from "../../components/world/TickerComponent";
import MixedGraph from "../../components/world/MixedGraph";

import { spacing } from '@material-ui/system';

export default function World() {

  return (
    <>
      <TickerComponent margin-top={5} margin-bottom={5} />
      <MixedGraph marginX={5} />
    </>
  );
}
