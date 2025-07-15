<!-- The page to display the list of routes -->
<script lang="ts">
  import routesJson from "$lib/data/misc/routes.json";
  import { titlecase, makeUrlFriendlyString } from "$lib/utils";
</script>

<!-- The headers for the list of routes -->
<svelte:head>
  <title>Routes - Inline Skate Info</title>
  <meta name="description" content="Urban routes" />
</svelte:head>

<!-- The start of the page -->
<main class="page-wrapper">
  <h1 id="routes">Routes</h1>
  <section>
    <!-- Convert all the new lines to <br> tags -->
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html routesJson.explanation.replace(/\n/g, "<br>")}
  </section>

  <section class="all-routes">
    <!---->

    <!-- Iterates over the difficulties -->
    {#each Object.entries(routesJson.difficulty) as [difficulty, routes] (difficulty)}
      <!---->

      {#if routes.length > 0}
        <section class="difficulty">
          <h2 id={makeUrlFriendlyString(difficulty)}>
            {titlecase(difficulty.replace(/[-_]/g, " "))}
          </h2>

          <!-- Iterates over the routes -->
          {#each routes as route}
            <!---->

            <article>
              <!-- Iterate over the properties of each route -->
              {#each Object.entries(route) as [key, value] (key)}
                <!---->

                {#if ["name"].includes(key)}
                  <h3 id={makeUrlFriendlyString(value)}>
                    <a href={route.link}>{value}</a>
                  </h3>
                {:else if !["link"].includes(key) && value}
                  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                  <div class="text"><b>{titlecase(key)}:</b> {@html value}</div>
                {/if}
              {/each}
            </article>
          {/each}
        </section>
      {/if}
    {/each}
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

  article:not(last-child) {
    margin-bottom: 5em;
  }

  .difficulty:not(:last-child) {
    margin-bottom: 10em;
  }
</style>
