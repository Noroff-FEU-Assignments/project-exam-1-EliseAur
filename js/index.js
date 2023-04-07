const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts";
const featuredImageURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts?_embed";
const postContainer = document.querySelector(".post-list");
const loader = document.querySelector(".loader");

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getResults = await response.json();
        console.log(getResults);
        createHTML(getResults);
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
            <a href="post-details.html" class="image-link"><img src="${post._embedded}" alt="" /></a>
        </div>
        <div class="post-text">
            <h3>${post.title.rendered}</h3>
            <p class="date">January 18, 2020</p>
            <p class="text">At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <a href="post-details.html" class="cta cta_read-more">Read more</a>
            <p class="categories">Categories: <span>Color</span> , <span>Interior</span></p>
        </div>
    </div>`;
    });
}

// <div class="products">
//     <a href="product.html?id=${product.id}"><img src="${product.images[0].src}" alt="${product.images[0].alt}" /></a>
//     <div class="product-text">
//     <h2 class="product-title">${product.name}</h2>
//     <p class="price">${product.prices.price},-</p>
//     <i class="${cssClass} fa-heart" data-id="${product.id}" data-name="${product.name}" data-price="${product.prices.price}" data-image="${product.images[0].src}" data-color1="${product.attributes[9].terms[0].name}" data-color2="${product.attributes[9].terms[1].name}" data-color3="${product.attributes[9].terms[2].name}"></i>
//     <div class="color-box">
//         <div class="color ${product.attributes[9].terms[0].name}"></div>
//         <div class="color ${product.attributes[9].terms[1].name}"></div>
//         <div class="color ${product.attributes[9].terms[2].name}"></div>

//     </div>
//     <a href="product.html?id=${product.id}" class="cta cta-small">View</a>
//     </div>

// </div>`;