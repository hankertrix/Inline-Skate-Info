<!-- The component to display the pages that use data from the lists folder -->
<!-- The pages are usually under the resources route -->
<script lang="ts">

  import {
    makeUrlFriendlyString,
    convertFilePathToUrl,
    getFilenameFromFilePath,
    getFileExtension
  } from "$lib/utils";

  // The type of the JSON data in the lists folder
  type ListsJson = {
    heading: string,
    links: string[][],
    files: string[]
  };
  
  // The variable to take in the title of the page
  export let title: string;
  
  // The variable which takes in the description of the page
  export let description: string;

  // The variable to take in the JSON data of the lists
  export let listsJson: ListsJson;

  // Gets the heading from the JSON data
  const heading = listsJson.heading;

  // The list of filenames
  const filenames = listsJson.files.map(
    path => getFilenameFromFilePath(path)
  );

  // Gets the set of duplicated filenames
  const duplicatedFilenames = new Set(
    filenames.filter(
      (filename, index, array) => array.indexOf(filename) !== index
    )
  );

  // Iterates over the filenames
  for (const [index, path] of listsJson.files.entries()) {

    // Gets the filename
    const filename = filenames[index];

    // If the filename is inside the set of duplicated filenames,
    // then add the file extension in parentheses
    if (duplicatedFilenames.has(filename)) {
      filenames[index] = `${filename} (${
        getFileExtension(path).toUpperCase()
      })`;
    }
  }
  
</script>

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

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta name="description" content={description}>
</svelte:head>

<!-- The HTML for the component -->
<main>
  
  <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  
  <div>

    <header>
      
      <!-- The heading of the page -->
      <p class="text">{heading}</p>
      
    </header>

    <!-- If there are links to display -->
    {#if listsJson.links.length > 0}

      <!-- The heading for the links -->
      {@const linksHeading = "Links"}
      
      <!-- Display the heading for the links -->
      <h3 class="text" id={linksHeading}>{linksHeading}</h3>
      
      <section class="links">

        <!-- Iterates over each of the links -->
        {#each listsJson.links as [title, url]}

          <!-- Display the links -->
          <a href={url} target="_blank">{title ? title : url}</a>

        {/each}

      </section>

    {/if}

    <!-- If there are files to display -->
    {#if filenames.length > 0}

      <!-- The heading for the files -->
      {@const filesHeading = "Files"}

      <!-- Display the heading for the files -->
      <h3 class="text" id={makeUrlFriendlyString(filesHeading)}>{filesHeading}</h3>

      <section class="files">

        <!-- Iterates over each of the files -->
        {#each listsJson.files as path, index}

          <!-- Display the link to the file -->
          <a href={convertFilePathToUrl(path)} target="_blank">{filenames[index]}</a>

        {/each}

      </section>

    {/if}
    
  </div>
  
</main>
