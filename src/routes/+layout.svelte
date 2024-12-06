<!-- The layout file for the website -->

<script lang="ts">
  //

  // Imports the theme
  import theme from "$lib/stores/theme";

  // Import all the required components
  import Footer from "$lib/components/layout/Footer.svelte";
  import NavBar from "$lib/components/layout/nav-bar/NavBar.svelte";
  import ScrollUpButton from "$lib/components/layout/ScrollUpButton.svelte";
  import PagefindHighlightLoader from "$lib/components/general/PagefindHighlightLoader.svelte";

  // Other imports
  import type { Snippet } from "svelte";
  import { onMount } from "svelte";

  // The interface for the props passed to the layout
  interface Props {
    children?: Snippet;
  }

  // Get the children from the props
  let { children }: Props = $props();

  // Function to create a media query listener
  // when the component is mounted
  onMount(() => {
    //

    // The media query for the user's theme preference
    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    // The function to run when the user's theme changes
    function whenUserThemeChanges(mq: MediaQueryListEvent) {
      //

      // Sets the theme
      $theme = mq.matches ? "dark" : "light";
    }

    // Adds the media query listener to the window
    mq.addListener(whenUserThemeChanges);

    // Returns the function to remove the media query listener
    return () => mq.removeListener(whenUserThemeChanges);
  });
</script>

<!-- The HTML for the layout -->
<div class="page-container">
  <div class="page-wrapper">
    <div id="top-of-the-page"></div>
    <ScrollUpButton />
    <NavBar />
    <PagefindHighlightLoader>
      {@render children?.()}
    </PagefindHighlightLoader>
  </div>
  <Footer />
</div>

<!-- Styles for the layout file -->
<style>
  .page-container,
  .page-wrapper {
    display: flex;
  }

  .page-container {
    position: relative;
    min-height: 100svh;
  }

  .page-wrapper {
    flex: 1;
    padding-top: var(--nav-bar-height);
    padding-bottom: var(--footer-height);
  }

  #top-of-the-page {
    visibility: hidden;
  }
</style>
