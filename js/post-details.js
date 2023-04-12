const postContainer = document.querySelector(".post-details");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const url = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts/" + productId;

async function getPostDetails() {
    try {
        const response = await fetch(url);
        const postDetails = await response.json();
        createHTML(postDetails);
        console.log(postDetails);
    } catch (error) {
        console.log(error);
    }
}

getPostDetails();

function createHTML(postDetails) {
    document.title = `V-W Cabin Life | ${postDetails.title.rendered}`;

    postContainer.innerHTML = `
    <div class="post-detail-heading">
        <h3>${postDetails.title.rendered}</h3>
    </div>
    <div class="post-details-box">
        ${postDetails.content.rendered}
    </div>
    `;
}

// Modal

const images = document.querySelectorAll(".wp-block-image img");
console.log(images);
