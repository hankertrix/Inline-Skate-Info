<!-- The page to display the student discount information -->
<script lang="ts">
  import PlacesSection from "$lib/components/pages/places/PlacesSection.svelte";
  import discountInfoJson from "$lib/data/misc/discount-info.json";
  import {
    makeUrlFriendlyString,
    titlecase,
    convertFilePathToUrl,
    getFilenameFromFilePath,
  } from "$lib/utils";

  // The type of the props passed to the page
  type Props = {
    data: {
      supportedRetailers: {
        [name: string]: {
          [attribute: string]: string;
        };
      };
    };
  };

  // Get the data from the props passed to the page
  const { data }: Props = $props();

  // Get the supported retailers
  const { supportedRetailers } = data;

  // The title for the page
  const title = titlecase(discountInfoJson.title);

  // The heading for the catalogues
  const catalogueHeading = "Catalogues";
</script>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
  <meta
    name="description"
    content="Details about the tertiary student discount for students studying in Singapore"
  />
</svelte:head>

<!-- The HTML for the page -->
<main>
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <section class="info">
    <!-->

    <!-- Iterates over all of the message parts -->
    {#each discountInfoJson.messageParts as messagePart (messagePart)}
      <!-->

      <!-- Displays a paragraph for each message part -->
      <p class="text">{messagePart}</p>
    {/each}
  </section>

  <section class="places">
    <PlacesSection
      placesJson={supportedRetailers}
      headingLevel={3}
      changeInHeadingLevel={1}
    />
  </section>

  <section class="catalogue">
    <header>
      <h3 class="text" id={makeUrlFriendlyString(catalogueHeading)}>
        {catalogueHeading}
      </h3>
    </header>

    <div class="link-wrapper">
      <!-->

      <!-- Iterates over all the catalogues -->
      {#each discountInfoJson.pdfFiles as file (file)}
        <!-->

        <!-- Display the link to the catalogue -->
        <a
          href={convertFilePathToUrl(file)}
          target="_blank"
          title="View the discounted skates">{getFilenameFromFilePath(file)}</a
        >
      {/each}
    </div>
  </section>
</main>

<!-- The styles for the page -->
<style>
  main {
    margin: var(--page-margin);
  }

  h1 {
    font-family: Oleo Script;
  }

  .info {
    font-size: 18px;
    margin-bottom: 2em;
  }

  .places {
    margin-bottom: 10em;
  }

  .catalogue {
    margin-bottom: 3em;
  }

  .link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
