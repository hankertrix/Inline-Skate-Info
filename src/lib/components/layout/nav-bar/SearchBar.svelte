<!-- The search bar component -->

<script lang="ts">
  import { goto } from "$app/navigation";

  // The function to handle the submission of the search query
  function handleSearchSubmit(e: SubmitEvent): void {
    //

    // Prevent the default form submission
    e.preventDefault();

    // Gets the form data
    const formData = new FormData(e.target as HTMLFormElement);

    // Gets the search query from the form data
    let searchQuery = formData.get("search") as string;

    // Removes the extra whitespace from the search query
    searchQuery = searchQuery.trim();

    // If the search query is empty, exit the function
    if (searchQuery.length < 1) return;

    // Otherwise, redirects the user to the search page with their query
    goto(`/search?q=${searchQuery}`);
  }
</script>

<!-- The HTML for the search bar -->
<form onsubmit={handleSearchSubmit}>
  <input
    class="text"
    type="text"
    name="search"
    placeholder="Search..."
    size="1"
  />
  <button
    type="submit"
    title="Search the website"
    aria-label="Search the website"
  >
    <svg
      class="search-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      ></path>
    </svg>
  </button>
</form>

<!-- The styles for the search bar -->
<style>
  :global(.light) form {
    --search-icon-colour: #787c82;
    --search-icon-hover-colour: #9aa0a6;

    background-color: white;
    box-shadow: 0 2px 5px 1px rgba(64, 60, 67, 0.16);
  }

  :global(.light) form:hover {
    box-shadow: 0 2px 8px 1px rgba(64, 60, 67, 0.3);
  }

  :global(.dark) form {
    --search-icon-colour: #c5c5d4;
    --search-icon-hover-colour: #dedeee;

    background-color: navy;
  }

  :global(.dark) form:hover {
    background-color: #0000b8;
  }

  form {
    font-size: 18px;
    border-radius: 100vh;
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
