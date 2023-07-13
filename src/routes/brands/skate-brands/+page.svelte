<!-- The page to display all of the skate brands -->
<script lang="ts" context="module">

  import brandsJson from "$lib/data/brands/skate-brands.json";
  export { brandsJson };
  
</script>

<script lang="ts">

  import BrandsPage from "$lib/components/pages/brands/BrandsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<BrandsPage title="Skate Brands" {brandsJson} headingLevel={3} changeInHeadingLevel={1} />