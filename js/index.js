const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts/?=&per_page=25";

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
    const arrows = document.querySelectorAll(".slider-arrow");
    arrows.forEach(function (arrow) {
        arrow.style.display = "flex";
    });

    posts.forEach(function (post) {
        postContainer.innerHTML += `
        <li class="post post-slider" id="post-slider">
            <div class="post-image">
                <a aria-label="Read more" href="post-details.html?id=${post.id}" class="image-link">
                    <img src="${post.better_featured_image.source_url}" alt="" />
                </a>
            </div>
            <div class="post-text">
                <div class="post-bg-brown">
                    <a aria-label="Read more" href="post-details.html?id=${post.id}" class="post-link">
                        <h3>${post.title.rendered}</h3>
                    </a>
                    <p class="date">${post.date}</p>
                    <p class="text">${post.excerpt.rendered}</p>
                </div>
            </div>
            <a aria-label="Read more" href="post-details.html?id=${post.id}" class="cta cta_read-more cta-slider">Read more</a>
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
        slidesContainer.scrollBy({
            left: slidesContainer.offsetWidth,
        });
    });

    prevButton.addEventListener("click", () => {
        slidesContainer.scrollBy({
            left: -slidesContainer.offsetWidth,
        });
    });
}
