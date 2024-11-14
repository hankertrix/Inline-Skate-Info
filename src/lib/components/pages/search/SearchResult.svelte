<!-- The component to display a single search result on the search page -->
<script lang="ts">

  import type { PagefindSearchFragment } from "vite-plugin-pagefind/types";

  // The search result passed in by the search page
  export let result: PagefindSearchFragment;

  // The regular expression to convert the URL given by pagefind to the actual website link
  const convertUrlRegex = /.*pages/;

  // Function to convert the URL given by pagefind to the actual website link
  function convertPagefindUrl(url: string) {
    return url.replace(convertUrlRegex, "");
  }

</script>

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

<!-- The HTML for the search result -->
<section class="search-result">
  <a class="result-title" href={convertPagefindUrl(result.url)}>{result.meta.title}</a>

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <div class="result-excerpt text">{@html result.excerpt}</div>
</section>
