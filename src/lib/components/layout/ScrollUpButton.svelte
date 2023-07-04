<!-- The button to scroll up to the top of a page -->
<script lang="ts">

  import { browser } from "$app/environment";
  import { onMount } from "svelte";

  // The scroll height threshold in pixels
  // The button will only appear after the scroll height is beyond this value
  const SCROLL_HEIGHT_THRESHOLD = 500;

  // The variable to store the scroll up button
  let scrollUpButton: HTMLElement | null = null;

  // The variable to store the previous scroll height
  let previousScrollHeight: number = 0;

  
  // The function to make the scroll up button appear and disappear
  function handleScroll() {

    // If the scroll up button is null, or if the window isn't defined, immediately exit the function
    if (scrollUpButton == null || typeof window === "undefined") return;

    // Gets the current scroll height
    const currentScrollHeight = window.scrollY;

    // If the current scroll height is greater than the scroll height threshold
    // And if the current scroll height is less than the previous scroll height (this means the user is scrolling upwards)
    if (currentScrollHeight > SCROLL_HEIGHT_THRESHOLD && currentScrollHeight < previousScrollHeight) {

      // Makes the scroll up button visible
      scrollUpButton!.style.visibility = "visible";
      scrollUpButton!.style.opacity = "1";
    }

    // Otherwise
    else {

      // Makes the scroll up button invisible
      scrollUpButton!.style.opacity = "0";
      scrollUpButton!.style.visibility = "hidden";
    }

    // Sets the previous scroll height to the current scroll height
    previousScrollHeight = currentScrollHeight;
  }

  
  // The function to run when the component is mounted
  onMount(() => {

    // Adds the event listener for the scroll event to the docunment
    document.addEventListener("scroll", handleScroll);

    // Gets the scroll up button
    scrollUpButton = document.getElementById("scroll-up-button");
    
  });
  
</script>

<!-- The styles for the scroll up button -->
<style>

  nav {
    --size: 2.5rem;
    
    position: fixed;
    bottom: 4rem;
    right: 1rem;
    border-radius: 50%;
    opacity: 0;
    visibility: hidden;
    width: var(--size);
    height: var(--size);
    z-index: 3;
    transition: opacity var(--animation-timing), visibility var(--animation-timing);
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
  }

  a:is(:link, :hover, :active, :visited) {
    color: var(--icon-colour);
  }

  svg {
    width: 100%;
    height: 100%;
    translate: 0 -2px;
  }
  
</style>

<!-- The HTML for the scroll up button -->
<nav id="scroll-up-button" title="Scroll to the top of the page">
  
  <a href="#top-of-the-page">

    <!-- The SVG for the scroll up button -->
    <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path fill="currentColor" d="M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z"></path>
    </svg>
  </a>
</nav>
