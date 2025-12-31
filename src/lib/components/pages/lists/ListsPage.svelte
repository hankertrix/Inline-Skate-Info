<!-- The component to display the pages that use data from the lists folder -->
<!-- The pages are usually under the resources route -->
<script lang="ts">
  import {
    makeUrlFriendlyString,
    convertFilePathToUrl,
    getUniqueFilenamesFromFilePaths,
  } from "$lib/utils";

  // The type of the JSON data in the lists folder
  type ListsJson = {
    heading: string;
    links: string[][];
    files: string[];
  };

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the title of the page
    title: string;

    // The variable which takes in the description of the page
    description: string;

    // The variable to take in the JSON data of the lists
    listsJson: ListsJson;
  }

  // Get the title, description
  // and the JSON data of the lists from the props
  let { title, description, listsJson }: Props = $props();

  // Gets the heading from the JSON data
  const heading = $derived(listsJson.heading);

  // The list of unique filenames
  const filenames = $derived(getUniqueFilenamesFromFilePaths(listsJson.files));
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description} />
</svelte:head>

<!-- The HTML for the component -->
<main>
  <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>

  <div>
    <header>
      <!-->

      <!-- The heading of the page -->
      <p class="text">{heading}</p>
    </header>

    <!-- If there are links to display -->
    {#if listsJson.links.length > 0}
      <!-->

      <!-- The heading for the links -->
      {@const linksHeading = "Links"}

      <!-- Display the heading for the links -->
      <h3 class="text" id={linksHeading}>{linksHeading}</h3>

      <section class="links">
        <!-->

        <!-- Iterates over each of the links -->
        {#each listsJson.links as [title, url] (url)}
          <!-->

          <!-- Display the links -->
          <a href={url} target="_blank">{title ? title : url}</a>
        {/each}
      </section>
    {/if}

    <!-- If there are files to display -->
    {#if filenames.length > 0}
      <!-->

      <!-- The heading for the files -->
      {@const filesHeading = "Files"}

      <!-- Display the heading for the files -->
      <h3 class="text" id={makeUrlFriendlyString(filesHeading)}>
        {filesHeading}
      </h3>

      <section class="files">
        <!-->

        <!-- Iterates over each of the files -->
        {#each listsJson.files as path, index (path)}
          <!-->

          <!-- Display the link to the file -->
          <a href={convertFilePathToUrl(path)} target="_blank"
            >{filenames[index]}</a
          >
        {/each}
      </section>
    {/if}
  </div>
</main>

<!-- The styles for the component -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  p {
    font-size: 20px;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-bottom: 2em;
  }
</style>
