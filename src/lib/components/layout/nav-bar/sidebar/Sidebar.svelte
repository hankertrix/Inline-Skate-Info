<!-- The side bar that the hamburger menu opens up -->
<script lang="ts">
  import TableOfContents from "$lib/components/layout/nav-bar/sidebar/table-of-contents/TableOfContents.svelte";
  import SidebarCollapsibleMenu from "$lib/components/layout/nav-bar/sidebar/SidebarCollapsibleMenu.svelte";

  // The pages in the website
  const pages = {

    "Terminology": "",
    
    "Tricks": {
      "Basics": "",
      "Fundamentals": "",
      "Turns": "",
      "Stops": "",
      "Jumps": "",

      "Slalom": {
        
        "Class A": {
          "Others": "",
          "Sitting": "",
          "Jumps": "",
          "Wheelings": "",
          "Spins": "",
        },
        
        "Class B": {
          "Others": "",
          "Sitting": "",
          "Jumps": "",
          "Wheelings": "",
          "Spins": "",
        },
        
        "Class C": {
          "Others": "",
          "Sitting": "",
          "Jumps": "",
          "Wheelings": "",
          "Spins": "",
        },
        
        "Class D": {
          "Others": "",
          "Sitting": "",
          "Jumps": "",
          "Wheelings": "",
          "Spins": "",
        },
        
        "Class E": {
          "Others": "",
          "Sitting": "",
          "Jumps": "",
          "Wheelings": "",
          "Spins": "",
        }
        
      },

      "Slides": {
        
        "Class A": {
          "Family 1": "",
          "Family 2": "",
          "Family 3": "",
          "Family 4": "",
          "Family 5": "",
        },
        
        "Class B": {
          "Family 1": "",
          "Family 2": "",
          "Family 3": "",
          "Family 4": "",
          "Family 5": "",
        },
        
        "Class C": {
          "Family 1": "",
          "Family 2": "",
          "Family 4": "",
          "Family 5": "",
        },
        
        "Class D": {
          "Family 1": "",
          "Family 2": "",
          "Family 4": "",
          "Family 5": "",
        },
        
        "Class E": {
          "Family 1": "",
          "Family 2": "",
          "Family 4": "",
        },
        
      },

      // Re-enable the aggressive tricks once the data for it is complete
      // "Aggressive": {

      //   "Basics": "",

      //   "Class A": {
      //     "Spins": "",
      //     "Others": "",
      //   },

      //   "Class B": {
      //     "Stalls": "",
      //     "Grinds": "",
      //     "Airs": "",
      //     "Spins": "",
      //     "Others": "",
      //   },

      //   "Class C": {
      //     "Stalls": "",
      //     "Grinds": "",
      //     "Airs": "",
      //     "Grabs": "",
      //     "Spins": "",
      //     "Others": "",
      //   },

      //   "Class D": {
      //     "Stalls": "",
      //     "Grinds": "",
      //     "Airs": "",
      //     "Grabs": "",
      //     "Spins": "",
      //     "Others": "",
      //   },

      //   "Class E": {
      //     "Stalls": "",
      //     "Grinds": "",
      //     "Airs": "",
      //     "Grabs": "",
      //     "Spins": "",
      //     "Others": "",
      //   },
        
      // },

      "Wizard": "",
      "Misc": "",
    },

    "Resources": {
      "Buying Guides": "",
      "Maintenance Guides": "",
      "Trick Lists": "",
      "Glossaries": "",
      "Rulebooks": "",
      "Misc": "",
    },

    "Discount Info": "",
    
    "Skate Recommendations": "",

    "Retailers": {
      "Retailers In Singapore": "",
      "Online Retailers": "",
      "Overseas Retailers": "",
    },

    "Places to Rent": "",

    "Places to Skate": {
      "Skating Rinks": "",
      "Skate Parks": "",
    },

    "Brands": {
      "Skate Brands": "",
      "Wheel Brands": "",
      "Frame Brands": "",
      "Liner Brands": "",
    },

    "Differences": {
      "Tri-skates": "",
      "FR Skates": "",
      "Boot Types": "",
    },

    "Products": {
      "Protective Gear": "",
      "Accessories": "",
      "Maintenance Items": "",
      "Clothing": "",
    },
  } as const;
  
</script>

<!-- The styles for the side bar -->
<style>

  ul {
    --sidebar-list-style-type: none;

    margin: 0 8px;
    padding: 0 8px 8px 0;
    list-style-type: var(--sidebar-list-style-type);
    max-height: calc(100svh - var(--nav-bar-height));
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-gutter: stable;
  }
  
</style>

<!-- The HTML for the side bar -->
<nav>
  <ul>
    <TableOfContents />
    <SidebarCollapsibleMenu pages={pages} />
  </ul>
</nav>