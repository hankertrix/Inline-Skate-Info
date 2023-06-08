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
    function whenUserThemeChanges(mq: MediaQueryListEvent) {

      // Sets the theme
      $theme = mq.matches ? "dark" : "light";
    }

    // Adds the media query listener to the window
    mq.addListener(whenUserThemeChanges);

    // Returns the function to remove the media query listener
    return () => mq.removeListener(whenUserThemeChanges);
  });

</script>

<!-- Styles for the layout file -->
<style>
  
  .page-container {
    position: relative;
    min-height: 100svh;
  }

  .wrapper {
    padding-bottom: var(--footer-height);
  }
  
</style>

<div class="page-container">
  <div class="wrapper">
    <slot />
  </div>
  <Footer />
</div>
