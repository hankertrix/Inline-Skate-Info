<!-- The hamburger menu for the website -->
<script lang="ts">

  // The javascript function to add a "checked" class to the hamburger icon (fallback for firefox which doesn't support the :has selector)
  function addCheckedClass(e: MouseEvent & { currentTarget: HTMLInputElement }) {

    // Check if the :has selector is supported
    const supportsHas = window.CSS.supports("selector(:has(body))");

    // If the has selector is supported, exit the function
    if (supportsHas) return;

    // Otherwise, gets the class list of the hamburger icon
    const classList = e.currentTarget.parentElement!.classList;

    // If the checkbox is checked, add the "checked" class to the hamburger icon
    if (e.currentTarget.checked) classList.add("checked");

    // Otherwise, remove the "checked" class from the hamburger icon if it exists
    else if (classList.contains("checked")) classList.remove("checked");
  }
</script>

<!-- Styles for the hamburger menu -->
<style>

  /* Styles for when the hamburger menu is closed */
  
  .hamburger-menu {
    --bar-width: 45px;
    --bar-height: 8px;
    --hamburger-gap: 6px;
    --animation-timing: 200ms ease-in-out;
    --hamburger-height: calc(var(--bar-height) * 3 + var(--hamburger-gap) * 2);
    
    /* The width of the "X" when the hamburger menu is open */
    /* 1.41421356237 is root 2 */
    --x-width: calc(var(--hamburger-height) * 1.41421356237);
  }

  .hamburger-icon {
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    width: max-content;
    cursor: pointer;
    background-color: var(--nav-and-footer-background-colour);
    padding: 5px;
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
    z-index: 2;
  }

  .hamburger-icon > input {
    appearance: none;
    margin: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
  }

  .sidebar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .sidebar {
    translate: -100%;
    transition: translate var(--animation-timing);
  }





  /* Styles for when the hamburger menu is open */
  
  .hamburger-icon > input:checked {
    opacity: 0;
    width: 0;
  }

  :is(.hamburger-icon:has(input:checked), .hamburger-icon.checked)::before {
    rotate: 45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / -2);
  }

  :is(.hamburger-icon:has(input:checked), .hamburger-icon.checked)::after {
    rotate: -45deg;
    width: var(--x-width);
    translate: 0 calc(var(--bar-height) / 2);
  }

  :is(.hamburger-icon:has(input:checked), .hamburger-icon.checked) + .sidebar {
    translate: 0;
  }

</style>

<!-- The HTML for the hamburger menu -->
<div class="hamburger-menu">

  <!-- The hamburger icon -->
  <label class="hamburger-icon">
    <input type="checkbox" on:click={addCheckedClass} />
  </label>

  <!-- The sidebar that opens up -->
  <aside class="sidebar text">
    <nav>
      <ul>
        <li>A</li>
        <li>Side</li>
        <li>Bar</li>
      </ul>
    </nav>
  </aside>
  
</div>