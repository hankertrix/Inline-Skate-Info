<!-- The hamburger menu for the website -->
<script lang="ts">
  
  import Sidebar from "$lib/components/Sidebar.svelte";
  import MainIcon from "$lib/components/MainIcon.svelte";
  import ThemeToggler from "$lib/components/ThemeToggler.svelte";

  // The javascript function to add a "checked" class to the nav bar (fallback for firefox which doesn't support the :has selector)
  function addCheckedClass(e: MouseEvent & { currentTarget: HTMLInputElement }) {

    // Check if the :has selector is supported
    const supportsHas = window.CSS.supports("selector(:has(body))");

    // If the has selector is supported, exit the function
    if (supportsHas) return;

    // Otherwise, gets the class list of the nav bar
    const classList = e.currentTarget.parentElement!.parentElement!.classList;

    // If the checkbox is checked, add the "checked" class to the nav bar
    if (e.currentTarget.checked) classList.add("checked");

    // Otherwise, remove the "checked" class from the nav bar if it exists
    else if (classList.contains("checked")) classList.remove("checked");
  }
</script>

<!-- Styles for the nav bar -->
<style>

  .top-menu {

    /* Hamburger menu custom CSS properties */
    --bar-width: 35px;
    --bar-height: 5px;
    --hamburger-gap: 4px;
    --animation-timing: 200ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
    --hamburger-width: calc(var(--bar-width) + var(--bar-height));
    
    /* The width of the "X" when the hamburger menu is open */
    /* 1.41421356237 is root 2 */
    --x-width: calc(var(--hamburger-height) * 1.41421356237);

    position: fixed;
    top: 0;
    width: 100vw;
    height: var(--nav-bar-height);
  }
  
  .nav-bar, .website-info {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .nav-bar {
    padding: 5px;
  }

  .website-info {
    font-family: Oleo Script;
    font-size: 2rem;
    text-decoration: none;
  }

  .main-icon {
    --icon-size: 2em;
    
    display: flex;
    align-items: center;
    width: var(--icon-size);
    height: var(--icon-size);
  }





  /* Styles for when the hamburger menu is closed */
  
  .hamburger-icon {
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    cursor: pointer;
    padding: 5px;
    width: var(--hamburger-width);
    justify-self: flex-start;
  }

  .hamburger-icon::before,
  .hamburger-icon::after,
  .hamburger-icon > input {
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    border-radius: 9999px;
    background-color: var(--icon-colour);
    opacity: var(--icon-opacity);
    transform-origin: left center;
    transition: opacity var(--animation-timing), width var(--animation-timing), rotate var(--animation-timing), translate var(--animation-timing);
  }

  .hamburger-icon > input {
    appearance: none;
    margin: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
  }

  .hamburger-icon:hover::before,
  .hamburger-icon:hover::after,
  .hamburger-icon:hover > input {
    background-color: var(--icon-hover-colour);
  }
  
  .sidebar {
    translate: -100%;
    width: max-content;
    transition: translate var(--animation-timing);
  }





  /* Styles for when the hamburger menu is open */
  
  .hamburger-icon > input:checked {
    opacity: 0;
    width: 0;
  }

  :is(.hamburger-icon:has(input:checked), .nav-bar.checked > .hamburger-icon)::before {
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
  }

  :is(.hamburger-icon:has(input:checked), .nav-bar.checked > .hamburger-icon)::after {
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2);
  }

  :is(.nav-bar:has(.hamburger-icon > input:checked), .nav-bar.checked) + .sidebar {
    translate: 0;
  }

  /* Don't animate when the user prefers reduced motion */
  @media (prefers-reduced-motion) {

    .top-menu {
      --animation-timing: 0;
    }
    
  }

</style>

<!-- The HTML for the top menu -->
<div class="top-menu">

  <!-- The nav bar -->
  <nav class="nav-bar">

    <!-- The hamburger menu icon -->
    <label class="hamburger-icon" title="Toggles the hamburger menu">
      <input type="checkbox" on:click={addCheckedClass} />
    </label>

    <!-- The main information about the website -->
    <a href="/" title="Go to the homepage" class="website-info">

      <!-- The icon for the website -->
      <div class="main-icon"><MainIcon /></div>
      
      <!-- The website name -->
      <div class="website-name text">Inline Skate Info</div>
      
    </a>

    <!-- The search bar to search the website -->
    <div class="search-bar">
      
    </div>

    <!-- The theme toggler -->
    <div class="theme-toggler">
      <ThemeToggler />
    </div>

  </nav>

  <!-- The sidebar that opens up -->
  <aside class="sidebar">
    <Sidebar />
  </aside>
  
</div>