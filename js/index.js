const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts";

const postContainer = document.querySelector(".slider");
const loader = document.querySelector(".loader");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
        createHTML(getPostResults);
    } catch (error) {
        console.log(error);
    }
}
getPosts();

function createHTML(posts) {
    // loader.style.display = "none";

    posts.forEach(function (post) {
        postContainer.innerHTML += `

        <div class="post">
                        <div class="post-image">
                            <a href="post-details.html" class="image-link"><img src="${post.better_featured_image.source_url}" alt="" /></a>
                        </div>
                        <div class="post-text">
                            <div class="post-bg-brown">
                                <h3>${post.title.rendered}</h3>
                                <p class="date">${post.date}</p>
                                <p class="text">${post.excerpt.rendered}</p>
                                <a href="post-details.html?id=${post.id}" class="cta cta_read-more">Read more</a>
                            </div>
                        </div>
                        
                    </div>`;
    });
}
