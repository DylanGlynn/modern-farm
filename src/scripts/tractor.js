import { addPlant } from "./field.js"

import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus();

import { createCorn } from "./seeds/corn.js"
const CornSeed = createCorn();

import { createPotato } from "./seeds/potato.js"
const PotatoSeed = createPotato();

import { createSoybean } from "./seeds/soybean.js"
const SoybeanSeed = createSoybean();

import { createSunflower } from "./seeds/sunflower.js"
const SunflowerSeed = createSunflower();

import { createWheat } from "./seeds/wheat.js"
const WheatSeed = createWheat();

/*          SOWING THE FIELD                                                [DONE]
        1. Create a scripts/tractor.js module.                              [DONE]
        2. In this module, define and export a plantSeeds function.         [DONE]
       3. This function must accept the year's planting plan as 
            input (i.e. it must define a parameter).                        [DONE]
        4. The plan is an array. It contains 3 arrays representing the 
            rows in the field to be plants. Figure out how to iterate 
            both the parent array and the child arrays.                     [DONE]
        5. As you iterate the row of food types to be planted, invoke 
            the corresponding factory function (e.g. if the food type 
            is "Asparagus", invoke the createAsparagus function to get 
            an asparagus seed).                                             [DONE]
        6. Take that seed and add it to the array of plants in the field 
            module.*///                                                     [DONE]
export const plantSeeds = (tractorPlanArray) => {
    for (let row of tractorPlanArray) {
        for (let seed of row) {
            if (seed === "Asparagus") {
                addPlant(asparagusSeed)
            }
            else if (seed === "Corn") {
                addPlant(CornSeed)
            }
            else if (seed === "Potato") {
                addPlant(PotatoSeed)
            }
            else if (seed === "Soybean") {
                addPlant(SoybeanSeed)
            }
            else if (seed === "Sunflower") {
                addPlant(SunflowerSeed)
            }
            else if (seed === "Wheat") {
                addPlant(WheatSeed)
            }
        }
    }
}