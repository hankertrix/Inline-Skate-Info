<!-- The hamburger menu for the website -->

<!-- Styles for the hamburger menu -->
<style>

  .hamburger-menu {
    --bar-width: 60px;
    --bar-height: 8px;
    --hamburger-gap: 6px;
    --animation-timing: 200ms ease-in-out;
    
    display: flex;
    flex-direction: column;
    gap: var(--hamburger-gap);
    width: max-content;
    cursor: pointer;
  }

  .hamburger-menu::before,
  .hamburger-menu::after,
  .hamburger-menu > input {
    content: "";
    width: var(--bar-width);
    height: var(--bar-height);
    border-radius: 9999px;
    background-color: var(--icon-colour);
    opacity: var(--icon-opacity);
    transition: opacity var(--animation-timing), width var(--animation-timing);
  }

  .hamburger-menu > input {
    appearance: none;
    margin: 0;
    padding: 0;
    outline: none;
    pointer-events: none;
  }
  
</style>

<!-- The HTML for the hamburger menu -->
<div>

  <!-- The hamburger icon -->
  <label class="hamburger-menu">
    <input type="checkbox" />
  </label>

  <!-- The sidebar that opens up -->
  <aside class="sidebar">
    <nav>
      <div>A</div>
      <div>Side</div>
      <div>Bar</div>
    </nav>
  </aside>
  
</div>