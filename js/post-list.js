const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".post-list");
const loader = document.querySelector(".loading-box");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
        seeMoreOrLess();
        // seeLastPosts();
        // showRestPosts();
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    loader.style.display = "none";

    posts.forEach(function (post) {
        postContainer.innerHTML += `

        <div class="post">
            <div class="post-list-image" style="background-image: url('${post.better_featured_image.source_url}')">
                <a href="post-details.html?id=${post.id}" class="image-link"></a>
            </div>
            <div class="post-text">
                <div>
                    <a href="post-details.html?id=${post.id}" class="post-link"><h3>${post.title.rendered}</h3></a>
                    <time class="date">${post.date}</time>
                    <p class="text">${post.excerpt.rendered}</p>
                    <a class="cta cta_read-more" href="post-details.html?id=${post.id}" >Read more</a>
                </div>
            </div>
        </div>`;
    });
}

function seeMoreOrLess() {
    const blogPosts = document.querySelectorAll(".post");
    const blogPostArray = Array.from(blogPosts);

    const firstPosts = blogPostArray.slice(0, 2);
    console.log(firstPosts);

    const lastPosts = blogPostArray.slice(-4);
    console.log(lastPosts);
    lastPosts.forEach(function (lastPost) {
        lastPost.classList.add("last-post");
    });

    const seeMoreButton = document.querySelector(".cta_more");

    seeMoreButton.addEventListener("click", (e) => {
        lastPosts.forEach(function (hiddenPost) {
            hiddenPost.classList.toggle("show-post");
        });

        if (seeMoreButton.innerHTML === `See more posts <i class="fas fa-arrow-circle-down" aria-hidden="true"></i>`) {
            seeMoreButton.innerHTML = `See less posts <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>`;
        } else {
            seeMoreButton.innerHTML = `See more posts <i class="fas fa-arrow-circle-down" aria-hidden="true"></i>`;
        }
    });
}
