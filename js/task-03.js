const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryRef = document.querySelector(".gallery");

const markup = images
  .map(
    (image) =>
      `<li class="gallery__item"><img class = 'gallery__img' src = ${image.url} alt = ${image.alt}></li>`
  )
  .join("");
console.log(galleryRef);
galleryRef.insertAdjacentHTML("afterbegin", markup);

galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.listStyle = "none";
galleryRef.style.justifyContent = "space-between";

const imagesRef = galleryRef.querySelectorAll(".gallery__img");
imagesRef.forEach((element) => (element.style.width = "480px"));
