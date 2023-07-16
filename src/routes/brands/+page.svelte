<!-- The page to display all of the brands involved in inline skating -->
<script lang="ts">

  import { brandsJson as skateBrandsJson } from "./skate-brands/+page.svelte";
  import { brandsJson as wheelBrandsJson } from "./wheel-brands/+page.svelte";
  import { brandsJson as frameBrandsJson } from "./frame-brands/+page.svelte";
  import { brandsJson as linerBrandsJson } from "./liner-brands/+page.svelte";
  import BrandsPage from "$lib/components/pages/brands/BrandsPage.svelte";


  // The brands JSON to pass to the page
  const brandsJson = {
    "Skate Brands": skateBrandsJson,
    "Wheel Brands": wheelBrandsJson,
    "Frame Brands": frameBrandsJson,
    "Liner Brands": linerBrandsJson,
  };
  
</script>

<!-- The HTML for the page -->
<BrandsPage title="Brands" description="Learn more about the brands involved in inline skating" {brandsJson} headingLevel={2} changeInHeadingLevel={1} />