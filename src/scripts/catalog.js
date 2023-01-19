import { harvestPlants } from "./harvester.js";
/*          SELLING INSTRUCTIONS                                            [DONE]
        You are a modern farm, so you want to put everything that you 
        harvested on your farm's ordering web site so that buyers can 
        access it from anywhere. To start, just list each of the plants 
        in your harvest.

        Use Flexbox to make a grid layout like below.
        <see image on webpage>
*/
/*            Instructions
        1. Create a <main> element in your index.html file. Make sure 
            the element has a class of container.                           [DONE]
        2. Create a scripts/catalog.js module.                              [DONE]
        3. Define and export a Catalog function.                            [DONE]
        4. The Catalog function should accept the harvested food array 
            as input.*/ //                                                  [DONE]
export const Catalog = (harvestedArray) => {
/*      5. The Catalog function should iterate the array of food objects.   [DONE]
        6. As you iterate the array, the <main> element should have its 
            inner HTML appended with an HTML representation of a food item. 
            Use the following example for each food item. The example has 
            Corn hard-coded. Yours should not. It should output the name 
            property of the current food object.

            <section class="plant">Corn</section>*/ //                      [DONE]
  let allHTMLString = '';
  for (const plant of harvestedArray) {
        allHTMLString += `<section class="plant">${plant.type}</section>\n`;
  }
  return allHTMLString;
};
