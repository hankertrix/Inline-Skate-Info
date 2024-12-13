// The module to load the data for the retailers
// for the discount information page

import fs from "fs/promises";
import discountInfoJson from "$lib/data/misc/discount-info.json";

// The load function to pass the data to the page
export const load = async () => {
  //

  // Get the retailer data from the JSON file
  const retailerData = discountInfoJson.retailerData;

  // Load the data from the JSON files in the paths
  const loadedData = await Promise.all(
    Object.keys(retailerData).map((path) => fs.readFile(path))
  );

  // Parse the data into objects
  const jsonData = loadedData.map((data) => JSON.parse(data.toString()));

  // Initialise the list containing the sliced data
  const slicedData = [];

  // Iterate over the metadata of the retailer data
  for (const [index, metadata] of Object.values(retailerData).entries()) {
    //

    // Slice the data to return only the retailers
    // that have a student discount
    const data = Object.fromEntries(
      Object.entries(jsonData[index]).slice(...metadata.listSlice)
    );

    // Add the data to the list
    slicedData.push(data);
  }

  // Merge the objects in the array into one single object
  const mergedData = slicedData.reduce((accumulator, currentRetailer) => {
    return { ...accumulator, ...currentRetailer };
  });

  // Return the data
  return {
    supportedRetailers: mergedData,
  };
};
