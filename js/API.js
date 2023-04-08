const postURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts";
const featuredImageURL = "https://elise-aurtande.no/project-exam/cabin-life/wp-json/wp/v2/posts?_embed";

async function getPosts() {
    try {
        const response = await fetch(postURL);
        const getPostResults = await response.json();
        console.log(getPostResults);
    } catch (error) {
        console.log(error);
    }
}
