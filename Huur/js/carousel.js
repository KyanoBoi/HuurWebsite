
// Fetch the JSON data
fetch('../data/data.json')
  .then(response => response.json())
  .then(jsonData => {
    // Retrieve the images array from the JSON data
    const images = jsonData.houses[1].images;

    // Create a container for the carousel
    const carouselContainer = document.getElementById('image-carousel');

    // Iterate over the images array and create an image element for each
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image.src;

      // Append the image to the carousel container
      carouselContainer.appendChild(img);
    });

    // Initialize the Slick Carousel on the carousel container
    $(carouselContainer).slick();
  })
  .catch(error => {
    console.error('Error:', error);
  });

