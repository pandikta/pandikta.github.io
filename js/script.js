const nav = document.getElementById('nav')

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY

    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark')
    } else if (scrollPosition <= 60) {
        nav.classList.remove('nav-dark')
    }
})

// Get the modal
const modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
const img = document.getElementById("myImg");

const modalImg = document.getElementById("img-modal");
const captionText = document.getElementById("caption");

document.addEventListener("click", (e) => {
    const elem = e.target;
    if (elem.id === "myImg") {
        modal.style.display = "block";
        modalImg.src = elem.dataset.biggerSrc || elem.src;
        captionText.innerHTML = elem.alt;
    }
})


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}