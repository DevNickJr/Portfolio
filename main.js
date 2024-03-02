var currentImageIndex;

function showModal(index) {
    currentImageIndex = index;
    updateModalContent();
    var modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

function changeImage(offset) {
    currentImageIndex += offset;
    updateModalContent();
}

function updateModalContent() {
    var modalImage = document.getElementById("modalImage");
    var images = ["./images/img1.png", "./images/img2.png", "./images/img3.png", "./images/img4.png", "./images/img5.png"];

    // Wrap around if going beyond the last or first image
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    modalImage.src = images[currentImageIndex];
}