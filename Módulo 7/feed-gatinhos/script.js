const feed = [];
const feedContainer = document.getElementById("feed");
const postForm = document.getElementById("postForm");

postForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = document.getElementById("postText").value.trim();
  if (!text) return;

  const catResponse = await fetch("https://api.thecatapi.com/v1/images/search");
  const catData = await catResponse.json();
  const catUrl = catData[0].url;

  const post = {
    date: new Date().toISOString(),
    username: "@gatinhoFofo",
    avatar: "https://i.pravatar.cc/40?img=" + Math.floor(Math.random() * 70 + 1),
    text,
    catImage: catUrl,
    likes: 0
  };

  feed.unshift(post);
  renderFeed();
  document.getElementById("postText").value = "";
});

function renderFeed() {
  feedContainer.innerHTML = "";
  feed.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post";
    div.innerHTML = `
      <div class="post-header">
        <img src="${post.avatar}" class="avatar" />
        <strong>${post.username}</strong>
      </div>
      <div class="post-text">${post.text}</div>
      <img src="${post.catImage}" class="cat" />
      <button class="likeBtn" onclick="likePost(${index})">❤️ Curtir (${post.likes})</button>
    `;
    feedContainer.appendChild(div);
  });
}

window.likePost = function(index) {
  feed[index].likes += 1;
  renderFeed();
};

