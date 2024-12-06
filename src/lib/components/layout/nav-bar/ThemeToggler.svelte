<!-- The component to toggle the theme on the page -->

<script lang="ts">

  // Imports the theme
  import theme from "$lib/stores/theme";

  // Function to change the theme when the theme toggler is clicked
  function handleClick() {

    // Sets the current theme to be opposite of the previous theme
    $theme = $theme === "light" ? "dark" : "light";
  }
  
</script>

<!-- The styles for the theme toggler -->
<style>

  /* Styles for the button to toggle between light and dark mode */

  /*
  References
  https://web.dev/building-a-theme-switch-component/
  https://www.youtube.com/watch?v=kZiS1QStIWc
  */

  /* The styles for the theme toggle button */
  .theme-toggle {
    --size: 100%;

    background: none;
    border: none;
    padding: 0;

    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1;
    border-radius: 50%;

    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;

    outline-offset: 5px;
  }

  .theme-toggle > svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round;
  }

  .theme-toggle {
    --icon-fill: var(--icon-colour);
    --icon-fill-hover: var(--icon-hover-colour);
  }





  /* The styles for the sun and moon SVG */


  /* Sets the center of rotation of all the elements in the SVG to the center of the SVG */
  .sun-and-moon > :is(:global(.moon, .sun, .sun-beams)) {
    transform-origin: center center;
  }


  /* Fills the sun and moon icons with the icon colour */
  .sun-and-moon > :is(:global(.moon, .sun)) {
    fill: var(--icon-fill);
  }

  /* Fills the sun and moon icons with the icon hover colour when the button is hovered */
  .theme-toggle:is(:global(:hover, :focus-visible)) .sun-and-moon > :is(:global(.moon, .sun)) {
    fill: var(--icon-fill-hover);
  }

  /* Fills the sun beams with the icon colour */
  .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill);
    stroke-width: 2px;
  }

  /* Fills the sun beams with the icon hover colour when the button is hovered */
  .theme-toggle:is(:global(:hover, :focus-visible)) .sun-and-moon > .sun-beams {
    stroke: var(--icon-fill-hover);
  }

  /* Makes the sun icon become 1.75x larger after transitioning from light theme to dark theme */
  :global(.dark) .theme-toggle .sun-and-moon > .sun {
    transform: scale(1.75);
  }

  /* Makes the sun beams invisible after transitioning from light theme to dark theme */
  :global(.dark) .theme-toggle .sun-and-moon > .sun-beams {
    opacity: 0;
  }

  /* Moves the circlular mask for the moon 7 pixels to the left as the mask starts at the right side of the icon */
  :global(.dark) .theme-toggle .sun-and-moon > .moon > circle {
    transform: translate(-7px);
  }

  /* Checks if the browser can change the position of a SVG shape */
  @supports (cx: 1) {

    /* If it can, then put the mask in the correct place without any transformation */
    :global(.dark) .theme-toggle .sun-and-moon > .moon > circle {
      transform: translate(0);
      cx: 17;
    }
  }

  /* This is to check if the user wants the icon to be animated */
  @media (prefers-reduced-motion: no-preference) {


    /* Light theme animations */


    /* Animate the transform operation on the sun to finish in half a second */
    .sun-and-moon > .sun {
      transition: transform .5s cubic-bezier(.5, 1.25, .75, 1.25);
    }

    /* Animate the transform operation on the sun beams for half a second while also fading out the sun beams after half a second */
    .sun-and-moon > .sun-beams {
      transition: transform .5s cubic-bezier(.5, 1.5, .75, 1.25), opacity .5s cubic-bezier(.25, 0, .3, 1);
    }

    /* Animate the transform operation on the mask of the moon for a quarter of a second */
    .sun-and-moon .moon > circle {
      transition: transform .25s cubic-bezier(0, 0, 0, 1);
    }

    /* Checks if the browser supports changing the position of a SVG shape element */
    @supports (cx: 1) {

      /* Animate that transition in a quarter of a second */
      .sun-and-moon .moon > circle {
        transition: cx .25s cubic-bezier(0, 0, 0, 1);
      }
    }


    /* Dark theme animations */


    /* Make the sun grow by 1.75x in a quarter of a second */
    :global(.dark) .theme-toggle .sun-and-moon > .sun {
      transform: scale(1.75);
      transition-timing-function: cubic-bezier(.25, 0, .3, 1);
      transition-duration: .25s
    }

    /* Make the sun beams rotate 25 degrees to the right in 0.15s */
    :global(.dark) .theme-toggle .sun-and-moon > .sun-beams {
      transform: rotate(-25deg);
      transition-duration: .15s
    }

    /* Delay the transition of the mask by a quarter of a second and animate it for half a second */
    :global(.dark) .theme-toggle .sun-and-moon > .moon > circle {
      transition-delay: .25s;
      transition-duration: .5s
    }
  }

</style>

<!-- The HTML for the component -->
<button onclick={handleClick} class="theme-toggle" title="Toggles between light & dark theme" aria-label="auto" aria-live="polite">

  <!-- The SVG of the sun and moon icon -->
  <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
    <mask class="moon" id="moon-mask">
      <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
      <circle cx="24" cy="10" r="6" fill="black"></circle>
    </mask>
    <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor"></circle>
    <g class="sun-beams" stroke="currentColor">
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </g>
  </svg>

</button>