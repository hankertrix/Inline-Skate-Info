const prerender = false;
async function load({ url: { searchParams } }) {
  const searchQuery = searchParams.get("q")?.trim();
  return {
    searchTerm: searchQuery,
    results: []
  };
}
export {
  load,
  prerender
};
