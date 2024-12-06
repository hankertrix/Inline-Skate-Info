<!-- The page to display all of the frame brands -->
<script lang="ts" module>
  import brandsJson from '$lib/data/brands/frame-brands.json';
  export { brandsJson };
</script>

<script lang="ts">
  import BrandsPage from '$lib/components/pages/brands/BrandsPage.svelte';
</script>

<!-- The HTML for the page -->
<BrandsPage
  title="Frame Brands"
  description="The list of brands that specialise in making frames for inline skates"
  {brandsJson}
  headingLevel={3}
  changeInHeadingLevel={1}
/>
