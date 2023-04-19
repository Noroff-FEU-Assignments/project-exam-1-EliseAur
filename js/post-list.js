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
    // const numberOfDisplayedPosts = 1;
    const blogPosts = document.querySelectorAll(".post");
    const blogPostArray = Array.from(blogPosts);
    console.log(blogPostArray);
    console.log(blogPostArray.length);

    const firstPosts = blogPostArray.slice(0, 2);
    console.log(firstPosts);

    const lastPosts = blogPostArray.slice(-4);
    console.log(lastPosts);
    lastPosts.forEach(function (hiddenPost) {
        hiddenPost.style.display = "none";
    });

    const seeMoreButton = document.querySelector(".cta_more");
    const seeLessButton = document.querySelector(".cta_less");
    console.log(seeMoreButton);
    seeMoreButton.onclick = function () {
        // const seeLessButton = document.querySelector(".cta_less");
        // seeLessButton.style.display = "block";
        // seeMoreButton.style.display = "none";

        // if visible is set remove it, otherwise add it
        seeMoreButton.classList.toggle("cta_more");
        seeMoreButton.classList.add("cta_less");
        seeLessButton.console // seeMoreButton.classList.toggle("see-less-button");
            .log("hello");
        // seeMoreButton.innerHTML = `See Less Posts <i class="fas fa-arrow-circle-up"></i>`;
        const visiblelastPosts = blogPostArray.slice(-4);
        visiblelastPosts.forEach(function (visiblePost) {
            visiblePost.style.display = "flex";
            visiblePost.classList.toggle("visible-post");
        });

        // seeMoreButton.onclick = function () {
        //     visiblelastPosts.forEach(function (visiblePost) {
        //         visiblePost.style.display = "none";
        //     });
        // };
    };
}

// function seeLastPosts() {
//     const seeMoreButton = document.querySelector(".cta_more");
//     console.log(seeMoreButton);
//     seeMoreButton.onclick = function () {
//         console.log("hello");
//         const lastPosts = blogPostArray.slice(-4);
//         lastPosts.forEach(function (visiblePost) {
//             visiblePost.style.display = "block";
//         });
//     };
// }

// function seeMore() {
//     let seeMoreButton = document.querySelector("#cta_more");
//     let currentItem = 2;

//     seeMoreButton.onclick = () => {
//         let boxes = document.querySelectorAll(".post");
//         for (var i = currentItem; i < currentItem + 2; i++) {
//             boxes[i].style.display = "block";
//         }

//         currentItem += 2;
//     };

// const seeMoreButton = document.querySelector(".cta_more");
// console.log(seeMoreButton);
// seeMoreButton.onclick = function () {
//     console.log("click");
// };

//     function showRestPosts() {}

//     // restOfThePosts.forEach(function (restPost) {
//     //     restPost.classList.add = "block";
//     // });
// };

// const seeMoreButton = document.querySelector(".cta-box");
// seeMoreButton.addEventListener("click", showRestPosts);

// seeMoreButton.onclick = function () {
// const restOfThePosts = blogPostArray.slice(-4);
// restOfThePosts.forEach(function (makePostVisible) {
//     console.log(restOfThePosts);
//     makePostVisible.style.display = "block";
// }
// console.log("click");
// };

// if (blogPostArray > numberOfDisplayedPosts) {
//     const seeMoreButton = document.querySelector(".cta_more");
//     // seeMoreButton.addEventListener("click", seeMorePosts);

//     restOfThePosts.forEach(function (post) {
//         seeMoreButton.onclick = function (event) {
//             event.target.classList.add("visible");
//         };
//     });

// function seeMorePosts() {
//     const restOfThePosts = blogPostArray.slice(-4);
//     restOfThePosts.forEach((post) => {
//         post.style.display = "block";
//     });
// }
// }

// function seeLessPosts() {
//     for (let i = 0; i < blogPostArray.length; i++) {
//         // console.log(blogPosts[i]);

//         if (i > numberOfDisplayedPosts) {
//             blogPostArray[i].style.display = "none";
//         }
//         console.log(blogPostArray[i]);
//     }
// }

// seeLessPosts();

// function seeMorePosts() {
//     blogPostArray[i].style.display = "block";
//     console.log("click click click");
// }

// function functionA() {
//     console.log("AAA");
// }

// const displayedPosts = blogPosts.slice(0, 2);
// console.log(displayedPosts);
// renderPosts(displayedPosts);
// showPosts(displayedPosts);

// if (blogPosts.length > numberOfDisplayedPosts) {
//     console.log("it is longer than two");
//     const seeMoreButton = document.querySelector(".cta_more");
//     seeMoreButton.addEventListener("click", () => {
//         const seeAllPosts = (blogPosts[i].style.display = "block");
//         console.log("click");
//     });
// }
// }

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3);
// console.log(citrus);
