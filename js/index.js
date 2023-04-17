const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".slider");
const loader = document.querySelector(".loading-box");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
        createSlider();
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    loader.style.display = "none";

    posts.forEach(function (post) {
        postContainer.innerHTML += `

        <li class="post post-slider" id="post-slider">
            <div class="post-image">
                <a href="post-details.html?id=${post.id}" class="image-link"><img src="${post.better_featured_image.source_url}" alt="" /></a>
            </div>
            <div class="post-text">
                <div class="post-bg-brown">
                    <a href="post-details.html?id=${post.id}" class="post-link"><h3>${post.title.rendered}</h3></a>
                    <p class="date">${post.date}</p>
                    <p class="text">${post.excerpt.rendered}</p>
                    <a href="post-details.html?id=${post.id}" class="cta cta_read-more">Read more</a>
                </div>
            </div>
        </li>`;
    });
}

function createSlider() {
    const slidesContainer = document.querySelector("#slider");
    console.log(slidesContainer);
    const postSlide = document.querySelector(".post-slider");
    const prevButton = document.querySelector("#arrow-prev");
    const nextButton = document.querySelector("#arrow-next");
    const slideWidth = postSlide.clientWidth;

    nextButton.addEventListener("click", () => {
        // slidesContainer.scrollLeft += 800;
        slidesContainer.scrollBy({
            left: slidesContainer.offsetWidth,
        });
    });

    prevButton.addEventListener("click", () => {
        // slidesContainer.scrollLeft -= 800;
        slidesContainer.scrollBy({
            left: -slidesContainer.offsetWidth,
        });
    });
}

// import { getPosts } from "../../api/posts.js";
// import { renderPosts } from "./displayPostList.js";

// const carouselWrapper = document.querySelector(".carousel-wrapper");
// const prevButton = document.querySelector(".carousel-prev");
// const nextButton = document.querySelector(".carousel-next");

// let loader = document.querySelector(".lds-ripple");
// let posts = [];

// export async function populateCarousel() {
//     prevButton.innerText = "<<<";
//     nextButton.innerText = ">>>";
//     posts = await getPosts();

//     renderPosts(posts, ".carousel-wrapper");
//     if (posts) {
//         loader.style.display = "none";
//     }

//     prevButton.addEventListener("click", () => {
//         carouselWrapper.scrollBy({
//             left: -carouselWrapper.offsetWidth,
//             // behavior: "smooth"
//         });
//     });

//     nextButton.addEventListener("click", () => {
//         carouselWrapper.scrollBy({
//             left: carouselWrapper.offsetWidth,
//             // behavior: "smooth"
//         });
//     });
// }
