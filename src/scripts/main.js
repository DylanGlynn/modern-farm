/*          CREATING A HARVEST PLAN
        There is an existing plan.js module in this application that is 
        reponsible for defining 3 rows of crops to be planted. In each 
        row, there are 6 plots of land. Each plot is randomly assigned 
        one of the following types of food to grow.
            1. Corn
            2. Asparagus
            3. Potato
            4. Wheat
            5. Sunflower
            6. Soybean

        In the plan.js module, there is a createPlan() function that is 
        exported. In the main.js module, import that function and invoke 
        it. Since that function returns a value, you need to store that 
        value in a variable named yearlyPlan.

        Remember that to assign what a function returns as a value of a 
        variable, the syntax is...

        const appropriatelyNamedVariable = theFunctionThatReturnsAValue()   [DONE]

        Then use console.log() to output the value of yearlyPlan to the 
        developer console in Chrome.*///                                    [PASS]
import { createPlan } from "./plan.js"
const yearlyPlan = createPlan()
console.log(yearlyPlan)

/*
            #2 -- SEED INSTRUCTION: CHECKING YOUR LOGIC                     [PASS]
        Write some temporary, test code in the main module to invoke 
        some of your seed creation functions that you defined in your 
        modules. Use console.log() to ensure that you get the right 
        value back.

        The following code should display an object with three properties 
        - type, height, output - in the developer console.

            /scripts/main.js
            import { createAsparagus } from "./seeds/asparagus.js"

            const asparagusSeed = createAsparagus()
            console.log(asparagusSeed)
*/
/* TEMPORARY TEST CODE -- Seeds Modules
import { createAsparagus } from "./seeds/asparagus.js"
const asparagusSeed = createAsparagus()
console.log(asparagusSeed)

import { createCorn } from "./seeds/corn.js"
const CornSeed = createCorn()
console.log(CornSeed)

import { createPotato } from "./seeds/potato.js"
const PotatoSeed = createPotato()
console.log(PotatoSeed)

import { createSoybean } from "./seeds/soybean.js"
const SoybeanSeed = createSoybean()
console.log(SoybeanSeed)

import { createSunflower } from "./seeds/sunflower.js"
const SunflowerSeed = createSunflower()
console.log(SunflowerSeed)

import { createWheat } from "./seeds/wheat.js"
const WheatSeed = createWheat()
console.log(WheatSeed)
//*/

//          TILLING INSTRUCTIONS -- CHECKING YOUR LOGIC                     [FAIL]
/*      Write some temporary test code in the main module to check if your 
            functions do their job correctly.*/
//      1. Create a seed object.
//      2. Invoke addPlant() and specify the seed object as the argument.   [----]
//      3. Invoke usePlants() and store its return value in a variable.     [----]
/*      4. Use console.log() to make sure your seed object got added
            to the array of plants in the field.*///                        [----]
import { addPlant } from "./field.js"
const testAddPlant = addPlant(yearlyPlan);
console.log(testAddPlant);

import { usePlants } from "./field.js"
const testUsePlants = usePlants(testAddPlant);
console.log(testUsePlants);
//*/

/*          SOWING THE FIELD -- CHECKING YOUR LOGIC                         [FAIL]
        In the main.js module, invoke the function that plants all of 
        the seeds, and then get the plants array from the fields.js 
        module. Then use console.log() to see if the plants array has 
        been populated correctly.                                           [----]
*/
import { plantSeeds } from "./tractor.js"
const testedPlantSeeds = plantSeeds()
console.log(testedPlantSeeds)
//*/
