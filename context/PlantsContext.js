// PlantsContext.js
import React from 'react';

const PlantsContext = React.createContext({
  plants: [],
  addPlant: () => {},
  removePlant: () => {},
});

export default PlantsContext;
