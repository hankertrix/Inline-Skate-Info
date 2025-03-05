<!-- The component to display a category of products, or a single product -->
<script lang="ts">
  import type { JsonData } from "$lib/types";
  import ProductsSection from "./ProductsSection.svelte";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The interface for the props passed to the component
  interface Props {
    //

    // The variable to take in the JSON data for the products
    productsJson: JsonData;

    // The variable to take in the heading level
    headingLevel?: number;

    // The variable to take in the change in heading level
    changeInHeadingLevel?: number;

    // The variable to take in the ID of the parent category
    parentId?: string;
  }

  // The type representing a product
  type Product = {
    price: string;
    link: string;
    description?: string;
  };

  // Get the variables from the props
  let {
    productsJson,
    headingLevel = 2,
    changeInHeadingLevel = 1,
    parentId = "",
  }: Props = $props();

  // The function to check if an object is a product object
  function isProductObject(obj: unknown) {
    return (
      Object.prototype.hasOwnProperty.call(obj, "price") &&
      Object.prototype.hasOwnProperty.call(obj, "link")
    );
  }

  // The function to cast an object as a product object
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function castAsProductObject(obj: any): Product {
    return obj as Product;
  }
</script>

<!-- The HTML for the component -->
<!-- Iterates over the products JSON data -->
{#each Object.entries(productsJson) as [name, obj] (name)}
  <!-->

  <!-- Gets the URL friendly string of the product or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}

  <!-- Creates the heading ID -->
  {@const headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}

  <!-- If the object is a product -->
  {#if isProductObject(obj)}
    <!-->

    <!-- Cast the object to a product object -->
    {@const productObj = castAsProductObject(obj)}

    <section class="product">
      <!-->

      <!-- Displays the product and it's price -->
      <!-- The heading is also hyperlinked -->
      <svelte:element this={heading} id={headingId} class="text"
        ><a
          href={productObj.link}
          target="_blank"
          title="Visit the product page">{name}</a
        ><span class="text">
          &#20; - {productObj.price}
        </span>
      </svelte:element>

      <!-- Add the product description if it exists -->
      {#if productObj.description}
        <p class="text">
          <!-- eslint-disable-next-line svelte/no-at-html-tags -->
          {@html productObj.description}
        </p>
      {/if}
    </section>

    <!-- Otherwise, the object is a product category -->
  {:else}
    <section class="product-category">
      <!-->

      <!-- Adds the category title -->
      <svelte:element this={heading} id={headingId} class="text"
        >{name}</svelte:element
      >
      <ProductsSection
        productsJson={obj}
        headingLevel={headingLevel + changeInHeadingLevel}
        {changeInHeadingLevel}
        parentId={headingId}
      />
    </section>
  {/if}
{/each}

<!-- The styles for the component -->
<style>
  .product {
    margin: 3em 0;
  }

  .product-category {
    margin: 3em 0;
  }

  .product-category + .product-category {
    margin: 10em 0;
  }
</style>
