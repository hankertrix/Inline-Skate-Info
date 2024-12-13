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

  // Slice the data to return only the retailers
  // that have discount information
  const slicedData = Object.values(retailerData)
    .entries()
    .map(([index, metadata]) =>
      Object.fromEntries(
        Object.entries(jsonData[index]).slice(...metadata.listSlice)
      )
    );

  // Merge the objects in the array into one single object
  const mergedData = slicedData.reduce((accumulator, currentRetailer) => {
    return { ...accumulator, ...currentRetailer };
  });

  // Return the data
  return {
    supportedRetailers: mergedData,
  };
};
