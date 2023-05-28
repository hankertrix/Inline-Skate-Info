<!-- The layout file for the website -->

<!-- Import all the required components -->
<script lang="ts">
  import Footer from "$lib/components/Footer.svelte";
</script>

<!-- Styles for the layout file -->
<style>
  
  .page-container {
    position: relative;
    min-height: 100vh;
  }

  .wrapper {
    padding-bottom: 3.5rem;
  }
  
</style>

<div class="page-container">
  <div class="wrapper">
    <slot />
  </div>
  <Footer />
</div>
