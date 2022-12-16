function mealSearch() {
    var mealTitle = document.getElementById("search").value;

    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealTitle}`;

    fetch(url)
        .then(res => res.json())
        .then(data => display(data));

    // clearing search box and prev. content 
    document.getElementById("search").value = " ";
    document.getElementById("result").textContent = " ";

}

function display(data) {
    var maxlimit = parseInt(document.getElementById('userLimit').value);
    document.getElementById("userLimit").value = " ";
    var content = document.getElementById('result');
    for (var i = 0; i < maxlimit; i++) {
        var newDiv = document.createElement("div");
        newDiv.innerHTML = `
        
        <div class="card m-2 h-200" style="width: 18em;">
        <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="card image">
        <div class="card-body">
        <h5 class="card-title">${data.meals[i].strMeal}</h5>
        <p class="card-text">
        <h4>Cooking Instructions:</h4>
        ${data.meals[i].strInstructions}
        </p>
    </div>
        ` ;



        content.appendChild(newDiv);


    }

}
