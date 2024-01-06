<!-- The component to display a category of products, or a single product -->
<script lang="ts">

  import type { Dict } from "$lib/types";
  import { makeUrlFriendlyString } from "$lib/utils";

  // The variable to take in the JSON data for the products
  export let productsJson: Dict<string>;

  // The variable to take in the heading level
  export let headingLevel: number = 2;

  // The variable to take in the change in heading level
  export let changeInHeadingLevel: number = 1;

  // The variable to take in the ID of the parent category
  export let parentId: string = "";

  // The type representing a product
  type Product = {
    price: string,
    link: string
  };


  // The function to check if an object is a product object
  function isProductObject(obj: unknown) {
    return Object.prototype.hasOwnProperty.call(obj, "price")
    && Object.prototype.hasOwnProperty.call(obj, "link");
  }


  // The function to cast an object as a product object
  function castAsProductObject(obj: object): Product {
    return obj as Product;
  }
  
</script>

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

<!-- The HTML for the component -->
<!-- Iterates over the products JSON data -->
{#each Object.entries(productsJson) as [name, obj]}

  <!-- Gets the URL friendly string of the product or category name -->
  {@const urlFriendlyName = makeUrlFriendlyString(name)}

  <!-- Creates the heading ID -->
  {@const headingId = `${parentId ? `${parentId}-` : ""}${urlFriendlyName}`}

  <!-- Gets the heading -->
  {@const heading = `h${headingLevel}`}
  
  <!-- If the object is a product -->
  {#if isProductObject(obj)}

    <!-- Cast the object to a product object -->
    {@const productObj = castAsProductObject(obj)}

    <section class="product">
      
      <!-- Displays the product and it's price -->
      <!-- The heading is also hyperlinked -->
      <svelte:element this={heading} id={headingId} class="text"><a href={productObj.link} target="_blank" title="Visit the product page">{name} - {productObj.price}</a></svelte:element>

    </section>

  <!-- Otherwise, the object is a product category -->
  {:else}

    <section class="product-category">

      <!-- Adds the category title -->
      <svelte:element this={heading} id={headingId} class="text">{name}</svelte:element>
      <svelte:self productsJson={obj} headingLevel={headingLevel + changeInHeadingLevel} {changeInHeadingLevel} parentId={headingId} />

    </section>

  {/if}

{/each}
