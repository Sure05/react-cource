import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";

function DimmerLoader({active}) {
  return (
    <Dimmer active={active} inverted><Loader /></Dimmer>
  );
}

export default DimmerLoader;
