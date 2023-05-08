const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts/?=&per_page=25";

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
        seeMoreOrLess();
        searchPost(getPostResults);
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    const loader = document.querySelector(".loading-box");
    loader.style.display = "none";
    const postContainer = document.querySelector(".post-list");

    posts.forEach(function (post) {
        postContainer.innerHTML += `

        <div class="post">
            <div class="post-list-image" style="background-image: url('${post.better_featured_image.source_url}')">
                <a aria-label="Read more" href="post-details.html?id=${post.id}" class="image-link"></a>
            </div>
            <div class="post-text">
                <div class="post-text-inner">
                    <a  aria-label="Read more" href="post-details.html?id=${post.id}" class="post-link"><h2>${post.title.rendered}</h2></a>
                    <time class="date">${post.date}</time>
                    <p class="text">${post.excerpt.rendered}</p>
                    <a aria-label="Read more" class="cta cta_read-more" href="post-details.html?id=${post.id}" >Read more</a>
                </div>
            </div>
        </div>`;
    });
}

function seeMoreOrLess() {
    const blogPosts = document.querySelectorAll(".post");
    const blogPostArray = Array.from(blogPosts);
    console.log("This is the array", blogPostArray);

    const firstPosts = blogPostArray.slice(0, 10);
    console.log(firstPosts);

    const lastPosts = blogPostArray.slice(-3);
    console.log(lastPosts);
    lastPosts.forEach(function (lastPost) {
        lastPost.classList.add("last-post");
    });

    const seeMoreButton = document.querySelector(".cta_more");

    seeMoreButton.addEventListener("click", (e) => {
        lastPosts.forEach(function (hiddenPost) {
            hiddenPost.classList.toggle("show-post");
        });

        if (seeMoreButton.innerHTML === `See older posts <i class="fas fa-arrow-circle-down" aria-hidden="true"></i>`) {
            seeMoreButton.innerHTML = `See less posts <i class="fas fa-arrow-circle-up" aria-hidden="true"></i>`;
        } else {
            seeMoreButton.innerHTML = `See older posts <i class="fas fa-arrow-circle-down" aria-hidden="true"></i>`;
        }
    });
}

function searchPost(posts) {
    const search = document.querySelector(".search-field");
    search.onkeyup = function (event) {
        console.log(event);

        const searchInput = event.target.value.trim().toLowerCase();

        const filteredPosts = posts.filter(function (filteredPost) {
            if (filteredPost.title.rendered.toLowerCase().startsWith(searchInput)) {
                return true;
            }
        });

        createHTML(filteredPosts);
    };
}
