<!-- The page to display all of the wheel brands -->
<script lang="ts" context="module">

  import brandsJson from "$lib/data/brands/wheel-brands.json";
  export { brandsJson };
  
</script>

<script lang="ts">

  import BrandsPage from "$lib/components/pages/brands/BrandsPage.svelte";
  
</script>

<!-- The HTML for the page -->
<BrandsPage title="Wheel Brands" description="The list of brands that specialise in making wheels for inline skates" {brandsJson} headingLevel={3} changeInHeadingLevel={1} />