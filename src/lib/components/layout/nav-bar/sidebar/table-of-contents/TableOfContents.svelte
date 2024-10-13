<!-- The component to generate the table of contents for the side bar -->
<script lang="ts">
  import type { TableOfContents } from "$lib/types";
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import TableOfContentsCollapsibleMenu from "./TableOfContentsCollapsibleMenu.svelte";

  // The variable to store the list of headings on the page
  // Eslint is somehow not recognising NodeListOf
  // defined type, hence the line below
  // eslint-disable-next-line  no-undef
  let headings: NodeListOf<Element>;

  // The variable to store the table of contents object
  let tableOfContents: TableOfContents = new Map();

  // Function to get the table of contents
  // Eslint is somehow not recognising NodeListOf
  // as a defined type, hence the line below
  // eslint-disable-next-line  no-undef
  function getTableOfContents(headings: NodeListOf<Element>) {
    //

    // The object representing the table of contents
    const tableOfContents = new Map();

    // The level of the first heading
    let firstHeadingLevel = -1;

    // The level of the previous heading
    let previousHeadingLevel = 0;

    // The list containing the references all the previous headings
    const previousHeadings = Array(7);

    // Iterates over all the headings in the document
    for (const heading of headings) {
      //

      // The level of the current heading
      const currentHeadingLevel = parseInt(heading.tagName.substring(1).trim());

      // If the heading is the first heading
      if (firstHeadingLevel < 0) {
        //

        // Sets the first heading level to the level of the first heading
        firstHeadingLevel = currentHeadingLevel;

        // Sets the previous heading level to the level of the current heading
        previousHeadingLevel = currentHeadingLevel;

        // Adds the heading to the table of contents
        tableOfContents.set(heading.textContent, {
          id: heading.id,
          children: new Map(),
        });

        // Adds the reference to the current heading
        // to the list of previous headings, at the position of its level
        previousHeadings[currentHeadingLevel] = tableOfContents.get(
          heading.textContent
        ).children;

        // Adds the reference to the entire table of contents to the
        // list of previous headings, one level below the current heading level
        previousHeadings[currentHeadingLevel - 1] = tableOfContents;

        // Continues the loop
        continue;
      }

      // Otherwise, if the current heading level is lower than that
      // of the first heading level, throw an error
      else if (currentHeadingLevel < firstHeadingLevel) {
        throw Error(
          `Failed to generate table of contents as the heading "${
            heading.textContent
          }" has a smaller heading level (` +
            `h${currentHeadingLevel}` +
            `) than the first heading level (${`h${firstHeadingLevel}`}).`
        );
      }

      // Initialise the previous heading variable
      let previousHeading = null;

      // If the current heading level is greater than the
      // previous heading level
      if (currentHeadingLevel > previousHeadingLevel) {
        //

        // Gets the previous heading from the list of previous headings
        previousHeading = previousHeadings[previousHeadingLevel];
      }

      // If the current heading level is the same or
      // less than that of the previous heading
      else if (currentHeadingLevel <= previousHeadingLevel) {
        //

        // Initialise the level variable to the current heading level minus 1
        let level = currentHeadingLevel - 1;

        // Gets the previous heading has a level lower
        // than the current heading level.
        // Iterates backwards while the level is greater or equal to zero
        // and the previous heading exists.
        while (level >= 0 && previousHeading == null) {
          //

          // Gets the previous heading reference from the list of
          // previous headings
          previousHeading = previousHeadings[level];

          // Decrease the level variable by 1
          level -= 1;
        }
      }

      // Adds the current heading to the previous heading
      previousHeading.set(heading.textContent, {
        id: heading.id,
        children: new Map(),
      });

      // Adds the current heading to
      // the list of previous headings at its current level
      previousHeadings[currentHeadingLevel] = previousHeading.get(
        heading.textContent
      ).children;

      // Set the previous heading level to the current heading level
      previousHeadingLevel = currentHeadingLevel;
    }

    // Returns the table of contents
    return tableOfContents;
  }

  // Reactive block
  $: {
    //

    // This is just to force the component to re-render when the route changes
    // eslint-disable-next-line  @typescript-eslint/no-unused-vars
    let throwaway = $page.url;

    // If the environment is the browser
    if (browser) {
      //

      // Gets all the headings in the document
      headings = document.querySelectorAll("h2, h3, h4, h5, h6");

      // Gets the table of contents from the page
      tableOfContents = tableOfContents.set("Table Of Contents", {
        id: "",
        children: getTableOfContents(headings),
      });
    }
  }
</script>

<!-- The HTML for the table of contents -->
<!-- Displays the table of contents only when the number
of headings on the page is greater than 2 -->
{#if headings && headings.length > 1}
  <TableOfContentsCollapsibleMenu {tableOfContents} />
{/if}
