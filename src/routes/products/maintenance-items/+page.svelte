<!-- The page to display the maintenance items you can buy -->
<script lang="ts" context="module">

  import productsJson from "$lib/data/products/maintenance-items.json";
  export { productsJson };
  
</script>

<script lang="ts">

  import ProductsPage from "$lib/components/pages/products/ProductsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ProductsPage title="Maintenance Items" {productsJson} headingLevel={4} changeInHeadingLevel={1} />