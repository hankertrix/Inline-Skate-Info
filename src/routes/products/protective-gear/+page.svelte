<!-- The page to display the protective gear you can buy -->
<script lang="ts" context="module">
  import productsJson from '$lib/data/products/protective-gear.json';
  export { productsJson };
</script>

<script lang="ts">
  import ProductsPage from '$lib/components/pages/products/ProductsPage.svelte';
</script>

<!-- The HTML for the page -->
<ProductsPage
  title="Protective Gear"
  description="The list of protective gear to protect yourself while inline skating"
  {productsJson}
  headingLevel={4}
  changeInHeadingLevel={1}
/>
