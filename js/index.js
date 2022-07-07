window.onload = function () {
  const container = document.querySelector("#inputSearch");
  const searchInput = container.querySelector("input");
  const movieList = document.querySelector("#searchedMovies");
  const initialMovies = document.querySelector("#initialMovies");
  let url = `https://api.jikan.moe/v4/anime?q=`;

  const initialElements = function (movie) {
    fetch(`${url}naruto`)
      .then(function (response) {
        return response.json();
      })
      .then(function (movie) {
        console.log(movie.data);
        movie.data.slice(-4).forEach((element) => {
          const listElem = document.createElement("div");
          const listImg = document.createElement("img");
          listImg.src = element.images.webp.image_url;
          listElem.className = "listElem";
          const elemTitle = document.createElement("h6");
          elemTitle.innerText = element.title_english;

          initialMovies.appendChild(listElem);
          listElem.appendChild(listImg);
          listElem.appendChild(elemTitle);
        });
      });
  };
  const createElement = function (movie) {
    movie.data.forEach((element) => {
      const listElem = document.createElement("div");
      const listImg = document.createElement("img");
      listImg.src = element.images.webp.image_url;
      const elemTitle = document.createElement("h6");
      elemTitle.innerText = element.title_english;

      movieList.appendChild(listElem);
      listElem.appendChild(listImg);
      listElem.appendChild(elemTitle);
    });
  };
  initialElements();
  const getData = function () {
    fetch(`${url}${searchInput.value}`)
      .then(function (response) {
        return response.json();
      })
      .then(createElement);
  };
  container.addEventListener("submit", function (event) {
    event.preventDefault();
    initialMovies.innerHTML = "";

    getData();
  });
};
