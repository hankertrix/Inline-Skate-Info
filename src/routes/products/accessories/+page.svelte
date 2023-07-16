<!-- The page to display the accessories you can buy -->
<script lang="ts" context="module">

  import productsJson from "$lib/data/products/accessories.json";
  export { productsJson };
  
</script>

<script lang="ts">

  import ProductsPage from "$lib/components/pages/products/ProductsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<ProductsPage title="Accessories" description="The list of accessories that you might find useful" {productsJson} headingLevel={4} changeInHeadingLevel={1} />