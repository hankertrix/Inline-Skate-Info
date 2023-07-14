<!-- The page to display all of the products you can buy -->
<script lang="ts">

  import { productsJson as protectiveGearJson } from "./protective-gear/+page.svelte";
  import { productsJson as accessoriesJson } from "./accessories/+page.svelte";
  import { productsJson as maintenanceItemsJson } from "./maintenance-items/+page.svelte";
  import { productsJson as clothingJson } from "./clothing/+page.svelte";
  import ProductsPage from "$lib/components/pages/products/ProductsPage.svelte";


  // The products JSON to pass to the page
  const productsJson = {
    "Protective Gear": protectiveGearJson,
    "Accessories": accessoriesJson,
    "Maintenance Items": maintenanceItemsJson,
    "Clothing": clothingJson,
  };
  
</script>

<!-- The HTML for the page -->
<ProductsPage title="Products" {productsJson} headingLevel={2} changeInHeadingLevel={2} />