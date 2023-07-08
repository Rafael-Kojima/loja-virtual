
/*Carrosel de Imagens */
document.addEventListener("DOMContentLoaded", function(event) {
  const carousel = document.querySelector(".carousel");
  const images = carousel.querySelectorAll("img");
  let currentImageIndex = 0;
  const interval = 3000; 

  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("active");
    }
    images[index].classList.add("active");

    const prevButton = document.querySelector(".carousel-button-prev");
    const nextButton = document.querySelector(".carousel-button-next");
    if (prevButton) {
      prevButton.remove();
    }
    if (nextButton) {
      nextButton.remove();
    }

    const newPrevButton = document.createElement("div");
    newPrevButton.className = "carousel-button carousel-button-prev";
    newPrevButton.innerHTML = "&#10094;";
    newPrevButton.addEventListener("click", previousImage);
    carousel.appendChild(newPrevButton);

    const newNextButton = document.createElement("div");
    newNextButton.className = "carousel-button carousel-button-next";
    newNextButton.innerHTML = "&#10095;";
    newNextButton.addEventListener("click", nextImage);
    carousel.appendChild(newNextButton);
  }

  function nextImage() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }
    showImage(currentImageIndex);
  }

  function previousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }
    showImage(currentImageIndex);
  }

  function autoChangeImage() {
    nextImage();
    setTimeout(autoChangeImage, interval);
  }

  showImage(currentImageIndex);
  setTimeout(autoChangeImage, interval); 
});


