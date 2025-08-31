// script.js
const container = document.getElementById("post-list");

posts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2><a href="posts/${post.filename}">${post.title}</a></h2>
    <p>${post.preview}</p>
  `;
  container.appendChild(article);
});
