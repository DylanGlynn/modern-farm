/*          TILLING THE FIELD                                               [DONE]
        1. Create a scripts/field.js module.                                [DONE]
        2. Define a variable in this module whose initial value is an 
            empty array. This array will store all of the plants that 
            are growing in the field. Do not export the array.*///          [DONE]
const seedPlan = []

/*      3. In the module, define and export a function named addPlant.      [DONE]
        4. The addPlant function must accept a seed object as input. 
            The function will add the seed to the field (How do you add 
            something to an array? Do you remember the method for it?).*/// [DONE]
export const addPlant = (fieldPlan) => {
    if (Array.isArray(fieldPlan) === true) {
        for (let cornSeed of fieldPlan) {
            seedPlan.push(cornSeed)
        }
    }
    else {
        seedPlan.push(fieldPlan)
    }
    return seedPlan
}

/*      5. Define and export a function named usePlants that returns 
            a copy of the array of plants.                                  [DONE]
        6. Be aware that when planting corn, an array of objects will 
            be provided instead of a single object like all the other 
            type of seeds. Investigate the Array.isArray method to check 
            if corn got passed in, or one of the others.*///                [DONE]
export const usePlants = () => {
    const copySeedPlan = seedPlan
    return copySeedPlan
}