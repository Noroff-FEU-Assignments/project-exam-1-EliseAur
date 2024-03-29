const postContainer = document.querySelector(".post-details");
const loader = document.querySelector(".loading-box");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");

const url = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts/" + productId;

async function getPostDetails() {
    try {
        const response = await fetch(url);
        const postDetails = await response.json();
        createHTML(postDetails);
        modal();
        console.log(postDetails);
    } catch (error) {
        console.log(error);
    }
}

getPostDetails();

function createHTML(postDetails) {
    loader.style.display = "none";
    document.title = `V-W Cabin Life | ${postDetails.title.rendered}`;
    document.getElementsByTagName("META")[3].content = `Read the post about ${postDetails.title.rendered} `;

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
function modal() {
    const popupImageWrapper = document.querySelector(".popup-image");
    const popupImage = document.querySelector(".popup-image img");
    const images = document.querySelectorAll(".wp-block-image img, .wp-block-post-featured-image img");
    console.log(images);
    images.forEach((image) => {
        image.onclick = () => {
            popupImageWrapper.style.display = "block";
            popupImage.src = image.getAttribute("src");
        };
    });

    const exitImage = document.querySelector(".popup-exit");

    exitImage.onclick = () => {
        popupImageWrapper.style.display = "none";
    };

    popupImageWrapper.onclick = () => {
        popupImageWrapper.style.display = "none";
    };
}
