import { plantSeeds } from "./tractor.js";
/*          HARVESTING INSTRUCTIONS
        1. Create a scripts/harvester.js module.                            [DONE]
        2. In this module, define and export a harvestPlants function.      [DONE]
        3. The harvestPlants function must accept the plants array 
            as input.                                                       [DONE]
        4. The function will return an array of seed objects.               [DONE]
        5. Iterate the array of growing plants. On each plant, get 
            the value of the output property.                               [DONE]
        6. Add that many of the plant objects to the array that the 
            function returns. For example, if the current plant is a 
            peanut object with an output of 2...
                {
                    type: "Peanut",
                    height: 30,
                    output: 2
                }

        6.5. Duplicate the number of plant objects based on their 
            individual output.
            Then the array that the function returns should have two 
            identical objects added to it.
                [
                    {
                        type: "Peanut",
                        height: 30,
                        output: 2
                    },
                    {
                        type: "Peanut",
                        height: 30,
                        output: 2
                    }
                ]
            Again, the exception is corn. Half of your corn will be 
            sold to cattle ranchers, so only half of the output of each 
            corn plant will be added to the array that this function 
            returns.*/ //                                                    [DONE]

export const harvestPlants = (plantArray) => {
  let seedObjectArray = [];
  for (const plant of plantArray) {
    if (plant.type === "Corn") {
      let output = plant.output / 2;
      for (let i = 0; i < output; i++) {
        seedObjectArray.push(plant);
      }
    } else {
      let output = plant.output;
      for (let i = 0; i < output; i++) {
        seedObjectArray.push(plant);
      }
    }
  }
  return seedObjectArray;
};
