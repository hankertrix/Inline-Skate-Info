<!-- The page to display the tools you can buy -->
<script lang="ts" module>
  import productsJson from "$lib/data/products/tools.json";
  export { productsJson };
</script>

<script lang="ts">
  import ProductsPage from "$lib/components/pages/products/ProductsPage.svelte";
</script>

<!-- The HTML for the page -->
<ProductsPage
  title="Tools"
  description="The list of tools that would be useful for inline skating"
  {productsJson}
  headingLevel={4}
  changeInHeadingLevel={1}
/>
