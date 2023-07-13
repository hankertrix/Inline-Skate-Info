<!-- The page to display all of the frame brands -->
<script lang="ts" context="module">

  import brandsJson from "$lib/data/brands/frame-brands.json";
  export { brandsJson };
  
</script>

<script lang="ts">

  import BrandsPage from "$lib/components/pages/brands/BrandsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<BrandsPage title="Frame Brands" {brandsJson} headingLevel={3} changeInHeadingLevel={1} />