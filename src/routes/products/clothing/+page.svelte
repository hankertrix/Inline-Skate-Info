<!-- The page to display the clothing you can buy -->
<script lang="ts" module>
  import productsJson from '$lib/data/products/clothing.json';
  export { productsJson };
</script>

<script lang="ts">
  import ProductsPage from '$lib/components/pages/products/ProductsPage.svelte';
</script>

<!-- The HTML for the page -->
<ProductsPage
  title="Clothing"
  description="The list of clothing items that would be useful for inline skating"
  {productsJson}
  headingLevel={4}
  changeInHeadingLevel={1}
/>
