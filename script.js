const searchButton = document.getElementById('searchButton');
const breedInput = document.getElementById('breedInput');
const imageContainer = document.getElementById('imageContainer');

searchButton.addEventListener('click', async () => {
  const breed = breedInput.value.toLowerCase();
  if (breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/10`);
    const data = await response.json();
    displayImages(data.message);
  }
});

function displayImages(images) {
  imageContainer.innerHTML = '';
  images.forEach((imageUrl) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = 'Dog Image';
    imageContainer.appendChild(imgElement);
  });
}
