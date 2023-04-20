const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

document.addEventListener('DOMContentLoaded', function() {
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  fetch(imgUrl)
    .then(response => response.json())
    .then(json => addImages(json.message))
}

function addImages(images) {
  const dogImageContainer = document.querySelector('#dog-image-container');
  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    dogImageContainer.appendChild(img);
  });
}

function fetchBreeds() {
  fetch(breedUrl)
    .then(response => response.json())
    .then(json => addBreeds(json.message))
}

function addBreeds(breeds) {
  const dogBreeds = document.querySelector('#dog-breeds');
  for (const breed in breeds) {
    const li = document.createElement('li');
    li.innerText = breed;
    dogBreeds.appendChild(li);
    li.addEventListener('click', changeColor);
  }
}

function changeColor(event) {
  event.target.style.color = 'blue';
}

const breedDropdown = document.querySelector('#breed-dropdown');
breedDropdown.addEventListener('change', function(event) {
  const letter = event.target.value;
  const dogBreeds = document.querySelector('#dog-breeds');
  const children = dogBreeds.children;
  for (let i = 0; i < children.length; i++) {
    const li = children[i];
    if (li.innerText.startsWith(letter)) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  }
});
