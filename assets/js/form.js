const submitButton = document.querySelector('#submit-button');
const userNameInput = document.querySelector('#username');
const blogTitleInput = document.querySelector('#blog-title');
const blogContentInput = document.querySelector('#blog-content');



submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const blogTitle = document.querySelector('#blog-title').value;
    const blogContent = document.querySelector('#blog-content').value;

   
    localStorage.setItem('user name', username);
    localStorage.setItem('blog-title', blogTitle);
    localStorage.setItem('blog-content', blogContent);
    window.location.href = "./blog.html";

}); 

