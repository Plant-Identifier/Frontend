// PlantsProvider.js
import React, { useState } from 'react';
import PlantsContext from './PlantsContext';

const PlantsProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);

  const addPlant = plant => {
    setPlants(currentPlants => [...currentPlants, plant]);
  };

  const removePlant = plantId => {
    setPlants(currentPlants => currentPlants.filter(plant => plant.id !== plantId));
  };

  return (
    <PlantsContext.Provider value={{ plants, addPlant, removePlant }}>
      {children}
    </PlantsContext.Provider>
  );
};

export default PlantsProvider;
