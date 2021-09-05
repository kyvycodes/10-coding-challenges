const meals = document.getElementById("meals");
const favoriteContainer = document.getElementById("fav-meals");

getRandomMeal();
fetchFavMeals();

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getRandomMealById(id) {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );

  const respData = await resp.json();
  const meal = respData.meals[0];
  // console.log("by id", respData);

  return meal;
}

// async function getMealsBySearch(factor) {
//   const meals = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/search.php?s=" + factor
//   );
// }

//reallocating from html file
function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
      <div class="meal-header">
        ${random ? `<span class="random"> Random Recipe </span>` : " "}
        <img
          src="${mealData.strMealThumb}"
          alt="${mealData.strMeal}"
        />
      </div>
      <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-button">
          <i class="fas fa-heart"></i>
        </button>
      </div>
      `;

  const btn = meal.querySelector(".meal-body .fav-button");
  btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
      removeMealsLocalStorage(mealData.idMeal);
      btn.classList.remove("active");
    } else {
      addMealLocalStorage(mealData.idMeal);
      btn.classList.add("active");
    }
  });

  meals.appendChild(meal);
}

function addMealLocalStorage(mealId) {
  const mealIds = getMealsLocalStorage();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

function getMealsLocalStorage() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));

  return mealIds === null ? [] : mealIds;
}

function removeMealsLocalStorage(mealId) {
  const mealIds = getMealsLocalStorage();

  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealIds.filter((id) => id !== mealId))
  );
}

async function fetchFavMeals() {
  const mealIds = getMealsLocalStorage();

  for (let i = 0; i < mealIds.length; i++) {
    const mealId = mealIds[i];
    let meal = await getRandomMealById(mealId);
    console.log("meal", meal);
    addMealToFavs(meal);
  }
}

//reallocating from html file
function addMealToFavs(mealData) {
  const favMeal = document.createElement("li");

  favMeal.innerHTML = `
  <img src='${mealData.strMealThumb}' alt='${mealData.strMeal}'>
    <span>${mealData.strMeal}</span>
      `;

  favoriteContainer.appendChild(favMeal);
}
