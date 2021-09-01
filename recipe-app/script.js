function getRandomMeal() {
  fetch("www.themealdb.com/api/json/v1/1/random.php");
}

function getRandomMealById(id) {
  fetch("www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}

function getMealsBySearch(factor) {
  fetch("www.themealdb.com/api/json/v1/1/search.php?s=" + factor);
}
