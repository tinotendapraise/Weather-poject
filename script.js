function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search");
  let city = document.querySelector("#city");
  city.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);
