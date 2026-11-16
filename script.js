const lightbox = document.querySelector("#lightbox");
const lightboxImage = lightbox.querySelector("img");


document.querySelectorAll(".project-image-link").forEach(link => {
    link.addEventListener("click", event =>
    {
        event.preventDefault();
        lightboxImage.src = link.href;
        lightboxImage.alt = link.querySelector("img").alt;
        lightbox.showModal();
    });



});

lightbox.addEventListener("click", () =>
{
lightbox.close();
});