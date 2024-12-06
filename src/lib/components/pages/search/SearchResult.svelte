<!-- The component to display a single search result on the search page -->
<script lang="ts">
  import type { PagefindSearchFragment } from "vite-plugin-pagefind/types";

  // The interface for the props passed to the component
  interface Props {
    //

    // The search result passed in by the search page
    result: PagefindSearchFragment;
  }

  // Get the search result passed by the search page
  let { result }: Props = $props();

  // The regular expression to fix the URL given by pagefind
  const fixPagefindUrlRegex = /\.html(?=$|\?)/;

  // Function to fix the URL given by pagefind
  function fixPagefindUrl(url: string) {
    return url.replace(fixPagefindUrlRegex, "");
  }
</script>

<!-- The HTML for the search result -->
<section class="search-result">
  <a class="result-title" href={fixPagefindUrl(result.url)}
    >{result.meta.title}</a
  >

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="result-excerpt text">{@html result.excerpt}</div>
</section>

<!-- The styles for the search result -->
<style>
  .search-result {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
  }

  .result-title {
    font-size: 20px;
  }
</style>
