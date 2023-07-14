<!-- The page to display the differences between the various inline skate boot types -->
<script lang="ts">

  import { makeUrlFriendlyString, titlecase } from "$lib/utils";
  import data from "$lib/data/differences/boot-types.json";

  // The title of the page
  const title = "Boot Types";

  // Gets the boot types JSON from the data
  const bootTypesJson = data.bootTypes;
  
</script>

<!-- The styles for the page -->
<style>

  main {
    margin: var(--page-margin);
  }

  .boot-type {
    margin: 3em 0;
  }

  .boot-type + .boot-type {
    margin: 10em 0;
  }

  .attribute {
    margin-bottom: 3em;
  }
  
</style>

<!-- The headers for the page -->
<svelte:head>
  <title>{title} - Inline Skate Info</title>
</svelte:head>

<!-- The HTML for the page -->
<main>
  
  <header>
    <h1 class="text" id={makeUrlFriendlyString(title)}>{title}</h1>
  </header>

  <article>

    <!-- Iterates over the boot types in the JSON -->
    {#each Object.entries(bootTypesJson) as [bootType, obj]}

      <section class="boot-type">

        <h2 class="text" id={makeUrlFriendlyString(bootType)}>{bootType}</h2>

        <!-- Iterates over all of the attributes of the object -->
        {#each Object.entries(obj) as [attribute, info]}

          <section class="attribute">
            
            <h4 class="text" id={makeUrlFriendlyString(attribute)}>{titlecase(attribute)}</h4>

            <!-- If the information is a string -->
            {#if typeof info === "string"}

              <!-- Display the information in a paragraph -->
              <p class="text">{info}</p>

              <!-- Otherwise, the information is a list of strings -->
            {:else}

              <!-- Display the information in an unordered list -->
              <ul>

                <!-- Iterates over each of the strings inside the list -->
                {#each info as line}
                  <li class="text">{line}</li>
                {/each}

              </ul>

            {/if}
            
          </section>
          
        {/each}

      </section>

    {/each}

  </article>

</main>