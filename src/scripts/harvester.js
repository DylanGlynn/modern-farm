//          HARVESTING INSTRUCTIONS
//      1. Create a scripts/harvester.js module.                            [----]
//      2. In this module, define and export a harvestPlants function.      [----]
/*      3. The harvestPlants function must accept the plants array 
            as input.*///                                                   [----]
//      4. The function will return an array of seed objects.               [----]
/*      5. Iterate the array of growing plants. On each plant, get 
            the value of the output property.                               [----]
/*      6. Add that many of the plant objects to the array that the 
            function returns. For example, if the current plant is a 
            peanut object with an output of 2...
                {
                    type: "Peanut",
                    height: 30,
                    output: 2
                }
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
            returns.*///                                                    [----]

//          CHECKING YOUR LOGIC                                             [----]
/*      In the main.js module, get the array of plants from the field 
            module, and then harvest them by invoking the appropriate 
            function that you defined above. Make sure you specify the 
            array of plants as an argument to the harvesting function.

        Then use console.log() to see your new array of harvested food 
        to sell.*///                                                        [----]