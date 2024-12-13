<!-- The component to display a category of places, or a single place -->
<script lang="ts">
  /* eslint-disable svelte/no-at-html-tags */

  import type { JsonData } from "$lib/types";
  import PlacesSection from "./PlacesSection.svelte";
  import { makeUrlFriendlyString, titlecase } from "$lib/utils";

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the JSON data for the places
    placesJson: JsonData;

    // The variable to take in the heading level
    headingLevel?: number;

    // The variable to take in the change in heading level
    changeInHeadingLevel?: number;

    // The variable to take in the ID of the parent category
    parentId?: string;
  }

  // The type representing a place
  type Place = {
    [attribute in (typeof PLACE_ATTRIBUTES)[number]]?: string;
  };

  // Get the variables from the props
  let {
    placesJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
    parentId = "",
  }: Props = $props();

  // The attributes of a place object
  const PLACE_ATTRIBUTES = [
    "address",
    "hours",
    "price",
    "phone",
    "email",
    "website",
    "mapLink",
    "description",
  ] as const;

  // The regular expression to check for phone numbers
  const phoneNumRegex = /\+\d+ (?:\d+(?:[- ]\b|\b)){2,}/g;

  // The function to check if an object is a place object
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function isPlaceObject(obj: any) {
    //

    // Checks if the attributes present in the object
    // is a subset of the attributes in the place object
    // and returns the result
    return Object.keys(obj).every((attribute) =>
      (PLACE_ATTRIBUTES as readonly string[]).includes(attribute)
    );
  }

  // Cast an object to a place object
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  function castAsPlaceObject(obj: any): Place {
    return obj as Place;
  }

  // Function to create links for phone numbers
  function createLinkForPhoneNum(str: string) {
    //

    // Replace all phone numbers with the linked version
    return str.replace(
      phoneNumRegex,
      (phoneNum) => `<a href="tel:${phoneNum}" target="_blank">${phoneNum}</a>`
    );
  }
</script>

<!-- The HTML for the places section -->
<!-- Iterates over the places JSON data -->
{#each Object.entries(placesJson) as [name, obj]}
  <!-->

  <!-- Gets the URL friendly string of the place or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}

  <!-- Creates the heading ID -->
  {@const headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}

  <!-- If the object is a place -->
  {#if isPlaceObject(obj)}
    <!-->

    <!-- Cast the object to a place object -->
    {@const placeObj = castAsPlaceObject(obj)}

    <article class="place">
      <!-->

      <!-- If the place has a website -->
      {#if "website" in placeObj}
        <!-->

        <!-- Hyperlink the website with the name of the place -->
        <svelte:element this={heading} id={urlFriendlyName} class="text"
          ><a href={placeObj.website} target="_blank" title="Visit the website"
            >{name}</a
          ></svelte:element
        >

      <!-- Otherwise -->
      {:else}
        <!-->

        <!-- Just have the heading by itself -->
        <svelte:element this={heading} id={urlFriendlyName} class="text"
          >{name}</svelte:element
        >
      {/if}

      <section class="attributes">
        <!-->

        <!-- Iterates over all of the values in the object -->
        {#each Object.entries(placeObj) as [attribute, value]}
          <!-->

          <!-- Gets the attribute in titlecase -->
          {@const titleCasedAttribute = titlecase(attribute)}

          <!-- Skip if attribute is either -->
          <!-- "website" or "mapLink" -->
          {#if ["website", "mapLink"].includes(attribute)}
            <!-->

          <!-- Otherwise, if the attribute is "email" -->
          {:else if ["email"].includes(attribute)}
            <!-->

            <!-- Displays the email in bold with the email linked -->
            <div class="text">
              <strong>{titleCasedAttribute}: </strong>
              <a href={`mailto:${value}`} target="_blank">{@html value}</a>
            </div>

          <!-- If the attribute is "phone" -->
          {:else if ["phone"].includes(attribute)}
            <!-->

            <!-- Displays the email in bold with the email linked -->
            <div class="text">
              <strong>{titleCasedAttribute}: </strong>
              {@html createLinkForPhoneNum(value)}
            </div>

          <!-- If the attribute is "address" and -->
          <!-- the link for the address exists -->
          {:else if ["address"].includes(attribute) && "mapLink" in placeObj}
            <!-->

            <!-- Displays the address in bold with the address link -->
            <div class="text">
              <strong>{titleCasedAttribute}: </strong>
              <a
                href={placeObj.mapLink}
                target="_blank"
                title="View the address on Google Maps">{@html value}</a
              >
            </div>

          <!-- Otherwise -->
          {:else}
            <!-->

            <!-- Displays the attribute in bold with the value beside it -->
            <div class="text">
              <strong>{titleCasedAttribute}: </strong>
              {@html value}
            </div>
          {/if}
        {/each}
      </section>
    </article>

  <!-- Otherwise, it is a category of places -->
  {:else}
    <section class="place-category">
      <!-->

      <!-- Adds the category title -->
      <svelte:element this={heading} id={headingId} class="text"
        >{name}</svelte:element
      >
      <PlacesSection
        placesJson={obj}
        headingLevel={headingLevel + changeInHeadingLevel}
        {changeInHeadingLevel}
        parentId={headingId}
      />
    </section>
  {/if}
{/each}

<!-- The styles for the places section -->
<style>
  .place {
    margin-bottom: 5em;
  }

  .place-category {
    margin: 3em 0;
  }

  /* Makes the spacing between the categories quite large */
  .place-category + .place-category {
    margin: 10em 0;
  }
</style>
