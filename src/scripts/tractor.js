import { createPlan } from "./plan.js"
const tractorPlan = createPlan();

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

//          SOWING THE FIELD
//      1. Create a scripts/tractor.js module.                              [DONE]
//      2. In this module, define and export a plantSeeds function.         [DONE]
/*      3. This function must accept the year's planting plan as 
            input (i.e. it must define a parameter).*///                    [DONE]
/*      4. The plan is an array. It contains 3 arrays representing the 
            rows in the field to be plants. Figure out how to iterate 
            both the parent array and the child arrays.*///                 [WORK]
export const plantSeeds = (fieldPlan) => {
/*     for (let seeds of yearlyPlan) {
        if (seeds === "Asparagus") {
            yearsPlan.push(asparagusSeed)
        }
        else if (seeds === "Corn") {
            yearsPlan.push(CornSeed)
        }
        else if (seeds === "Potato") {
            yearsPlan.push(PotatoSeed)
        }
        else if (seeds === "Soybean") {
            yearsPlan.push(SoybeanSeed)
        }
        else if (seeds === "Sunflower") {
            yearsPlan.push(SunflowerSeed)
        }
        else if (seeds === "Wheat") {
            yearsPlan.push(WheatSeed)
        }
    } */
/*     Process similar to this ???
    export const createPlan = () => {
        const plan = []
        for (let index = 0; index < 3; index++) {
            const row = []
            for (let j = 0; j < 6; j++) {
                row.push(crop.next().value)
            }
            plan.push(row)
        }
        return plan
 */
    //return yearsPlan
}
/*      5. As you iterate the row of food types to be planted, invoke 
            the corresponding factory function (e.g. if the food type 
            is "Asparagus", invoke the createAsparagus function to get 
            an asparagus seed).*///                                         [----]
/*      6. Take that seed and add it to the array of plants in the field 
            module.*///                                                     [----]