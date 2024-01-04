<!-- The page to display all of the products you can buy -->
<script lang="ts">
  import { productsJson as protectiveGearJson } from './protective-gear/+page.svelte';
  import { productsJson as accessoriesJson } from './accessories/+page.svelte';
  import { productsJson as maintenanceItemsJson } from './maintenance-items/+page.svelte';
  import { productsJson as clothingJson } from './clothing/+page.svelte';
  import ProductsPage from '$lib/components/pages/products/ProductsPage.svelte';

  // The products JSON to pass to the page
  const productsJson = {
    'Protective Gear': protectiveGearJson,
    Accessories: accessoriesJson,
    'Maintenance Items': maintenanceItemsJson,
    Clothing: clothingJson,
  };
</script>

<!-- The HTML for the page -->
<ProductsPage
  title="Products"
  description="The list of all the products that you may find useful for inline skating"
  {productsJson}
  headingLevel={2}
  changeInHeadingLevel={2}
/>
