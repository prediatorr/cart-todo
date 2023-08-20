export function filterData(searchText, restaurants) {
    if (searchText != "") {
      return restaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
    } else return restrautList;
  }