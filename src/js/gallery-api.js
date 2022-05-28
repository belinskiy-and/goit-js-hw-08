import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

export const showGallery = (galleryItems) => {
    const galleryElement = document.querySelector(".gallery");

    for (const item of galleryItems) {
        // const galleryItem = document.createElement("div");
        // galleryItem.classList.add("gallery__item");
        // galleryElement.append(galleryItem);

        const galleryLink = document.createElement("a");
        galleryLink.classList.add("gallery__item");
        galleryLink.setAttribute("href", item.original);
        galleryElement.append(galleryLink);

        const galleryImage = document.createElement("img");
        galleryImage.classList.add("gallery__image");
        galleryImage.setAttribute("src", item.preview);
        // galleryImage.setAttribute("data-source", item.original);
        galleryImage.setAttribute("alt", item.description);
        galleryLink.append(galleryImage);
    }

    const clickAction = event => {
        event.preventDefault();

        let gallery = new SimpleLightbox('.gallery a', {
            // captionType: "text",
            captionsData: "alt",
            captionDelay: 250,
        });

        // var lightbox = $('.gallery a').simpleLightbox({ /* options */ });

        // gallery.on('show.simplelightbox', function () {
    	// // do something…

        // });

        
    };

    galleryElement.addEventListener("click", clickAction);
}

