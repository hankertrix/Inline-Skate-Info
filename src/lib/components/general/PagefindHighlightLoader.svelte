<!-- The component to load the pagefind highlight script -->
<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount } from "svelte";
  import { PAGEFIND_BASE_PATH, PAGEFIND_HIGHLIGHT_PARAM } from "$lib/constants";

  // The interface for the props passed to the component
  interface Props {
    children?: Snippet;
  }

  // Get the children from the props
  let { children }: Props = $props();

  // Function to initialise the pagefind highlighting script
  // when the component is mounted
  onMount(async () => {
    //

    // Get the search params passed to the current page
    const searchParams = new URLSearchParams(window.location.search);

    // Tries to get the value of the parameter for the pagefind highlight script
    const value = searchParams.get(PAGEFIND_HIGHLIGHT_PARAM);

    // If the value is empty, then immediately exit the function.
    // This is so that the pagefind highlight script won't be loaded
    // when it is not needed.
    if (!value) return;

    // Import the pagefind highlighting script.
    // Ask vite to ignore this import as the pagefind highlighting script
    // is only generated after building the site.
    await import(
      /* @vite-ignore */ `${PAGEFIND_BASE_PATH}/pagefind-highlight.js`
    );

    // Initialise the pagefind highlighting script.
    // The pagefind highlight class will be a global object when the
    // pagefind highlight script is loaded, hence the expect error and ignore.
    // @ts-expect-error: The PagefindHighlight class will be a global
    // eslint-disable-next-line no-undef
    new PagefindHighlight({ highlightParam: PAGEFIND_HIGHLIGHT_PARAM });
  });
</script>

<div data-pagefind-body>
  {@render children?.()}
</div>

<style>
  div {
    display: flex;
    flex: 1;
  }
</style>
