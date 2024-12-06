<!-- The page to display the maintenance items you can buy -->
<script lang="ts" module>
  import productsJson from '$lib/data/products/maintenance-items.json';
  export { productsJson };
</script>

<script lang="ts">
  import ProductsPage from '$lib/components/pages/products/ProductsPage.svelte';
</script>

<!-- The HTML for the page -->
<ProductsPage
  title="Maintenance Items"
  description="The list of items that you will likely need to maintain your skates"
  {productsJson}
  headingLevel={4}
  changeInHeadingLevel={1}
/>
