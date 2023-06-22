<!-- The search bar component -->

<script>

  // The function to handle the search when the user starts typing into the search bar
  async function handleSearch() {

    // Initialise pagefind
    // const pagefind = await import("/_pagefind/pagefind.js");
  }

  // The function to handle the submission of the search query
  function handleSearchSubmit() {
    
  }
  
</script>

<!-- The styles for the search bar -->
<style>

  :global(.light) form {
    --search-icon-colour: #787C82;
    --search-icon-hover-colour: #9AA0A6;
    
    background-color: white;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, .16);
  }

  :global(.light) form:hover {
    box-shadow: 0 2px 8px 1px rgba(64, 60, 67, .30);
  }

  :global(.dark) form {
    --search-icon-colour: #C5C5D4;
    --search-icon-hover-colour: #DEDEEE;

    background-color: navy;
  }

  :global(.dark) form:hover {
    background-color: #0000B8;
  }

  form {
    font-size: 18px;
    border-radius: 9999px;
    padding: 5px 12px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    font-size: inherit;
    border-style: none;
    outline: none;
    background: transparent;
    flex: 1;
  }

  button {
    --size: 24px;
    
    width: var(--size);
    height: var(--size);
    margin: 0;
    padding: 0;
    
    border-style: none;
    outline: none;
    background: transparent;
    cursor: pointer;
  }

  button:hover > .search-icon {
    fill: var(--search-icon-hover-colour);
  }

  .search-icon {
    --size: 100%;
    
    display: block;
    width: var(--size);
    height: var(--size);
    fill: var(--search-icon-colour);
  }
  
</style>

<!-- The HTML for the search bar -->
<form>
  <input class="text" type="text" placeholder="Search..." size="1">
  <button type="submit" title="Search the website">
    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
    </svg>
  </button>
</form>
