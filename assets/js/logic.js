const userNamePost = document.querySelector('#username-post');
const blogTitlePost = document.querySelector('#blog-title-post');
const blogContentPost = document.querySelector('#blog-content-post');



function renderBlogPost() {
    const username = localStorage.getItem('username');
    const blogTitle = localStorage.getItem('blog-title');
    const blogContent = localStorage.getItem('blog-content');

    if (!username || !blogTitle || !blogContent) return;

    userNamePost.textContent = username;
    blogTitlePost.textContent = blogTitle;
    blogContentPost.textContent = blogContent;
}

function init() {

    renderBlogPost();
}
init();