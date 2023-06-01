<!-- The layout file for the website -->

<script lang="ts">

  // Imports the theme
  import theme from "$lib/stores/theme";

  // Import all the required components
  import Footer from "$lib/components/Footer.svelte";

  // Other imports
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  // Function to run when the component is mounted
  onMount(() => {

    // The media query for the user's theme preference
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // The function to run when the user's theme changes
    function whenThemeChanges(mq: MediaQueryListEvent) {

      // Sets the theme
      $theme = mq.matches ? "dark" : "light";
    }

    // Adds the media query listener to the window
    mq.addListener(whenThemeChanges);

    // Returns the function to remove the media query listener
    return () => mq.removeListener(whenThemeChanges);
  });

  // Every time the theme changes, change the class on the body to match the theme
  $: if (browser) window.document.body.className = $theme;

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
