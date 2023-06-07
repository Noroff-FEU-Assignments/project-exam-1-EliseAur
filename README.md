## Project Exam 1

---

h1, h2, .copy, nav a:
font-family: "lobster", sans-serif;
font-weight: 400;
font-style: normal;

h3, p, a
font-family: "open-sans", sans-serif;
font-weight: 400;
font-style: normal;

## Goal

To put into practice the skills learned over your first year of studies.

## Brief

You have been tasked with creating a blog site. You can choose the design and topics covered on the blog, but it should have at least the following pages:

-   Home page
-   About page
-   List of blog posts
-   Blog post specific pages
-   Contact page.

### Home Page

The home page should have a ‘Latest Posts’ section which uses a carousel (slider) for users to click to view more posts. For example, by default the user can see four posts, then they can click an arrow on the right to view the next four posts, and click it again to view the next four posts. The user can also click back to view results they had previously seen. This must be implemented for desktop at least, but if you want a simpler layout for mobile, you can change it from being in a carousel.

### Blog Page

The blog posts page should show the first 10 blogs, and the user should click to view more results which then show underneath the first 10 blogs.

### Blog Specific Page

The content of the blog specific page should be dynamically built using a query string parameter based on whatever link the user clicked. The title of the blog specific page should change based on the blog that has been clicked on e.g. “My Blog | An Article I Wrote”.

If images on the blog post page are clicked, a modal should appear giving the user a bigger view of that image. Clicking outside the image should hide the modal.

### Contact page

Create a contact us page, there should be 4 textboxes on this page.

-   Name (Should be more than 5 characters long)
-   Email address (Must be a valid email address)
-   Subject (Should be more than 15 characters long)
-   Message content (Should be more than 25 characters long)

Please use JavaScript for validation, show error messages if the values in the textboxes do not meet the requirements.

### WordPress

The content for your website will be stored on a WordPress installation used as a Headless CMS. It’s important to note that we are only using WordPress to provide an API and add content for the blog. You should not submit a link to a WordPress site, but build your website using HTML, CSS and JavaScript and making a call to the WordPress REST API to fetch the data.

The project has two aspects:

-   API from your WordPress installation
-   Your website built with HTML, CSS and JavaScript

You will need to add at least 12 blogs for your website. You can use lorem ipsum for paragraphs if you need, but headings, images etc. should all make sense.

Note that this is an exam, and therefore tutor support will be limited as per the study plan.

## Level 1 Process

1. Decide on the theme for the blog you’re going to make
2. Create a prototype of the website
3. Install WordPress on your web host and add the blogs on the admin panel.
4. Use the GitHub repo created by GitHub Classroom for your files and deploy to Netlify
5. Build your website using HTML, CSS and JavaScript making a call to the WordPress REST API to fetch your data.
6. Install Hotjar on your website.
7. Ask users to test your website, and adjust based on their feedback and any insights from Hotjar.
8. Write a report documenting your project (template provided in this repository).
9. Submit your report as a PDF and a link to both your Netlify deployment and your GitHub repo.

## Level 2 Process (optional)

1. You can try adding a sort, filter, or search to the blog posts page allowing users to find the blog post more easily that they’re looking for.
2. Post the data from the contact form to WordPress so you have the details saved.
3. Allow users to submit comments on a blog post, and post this data to WordPress


# Project Exam 1

![image](https://github.com/Noroff-FEU-Assignments/)


In this project we were tasked with creating a blog site. We could choose the design and topic covered on the blog. The blog had to have at least the following pages: 

-   Home page
-   About page
-   List of blog posts
-   Blog post specific pages
-   Contact page.

## Description

Add a more detailed description of what your project entails and set out to do.

You can add some bullet points if you'd like to:

- List item 1
- List item 2
- List item 3

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)

## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contributing

Here you can detail any information you want to provide regarding contributing to the project. For big projects you will usually have a separate `CONTRIBUTING.md` and link to it, but for smaller projects you can simply include instructions here. These instructions can simply detail the process you want a person to take, such as to make sure to open a pull request so code can be reviewed.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)

## License

You can link to your license file here if you're using one, or mention what license the codebase falls under. If you're unsure then you can simply delete this section.

## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.
