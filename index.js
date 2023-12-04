const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function addLikes(likeBtn, likeNum) {
    if (!likeBtn.classList.contains("clicked")) {
        let currentLikes = parseInt(likeNum.innerText.replace(/[^0-9]/g, ''), 10)
        currentLikes++
        likeNum.innerHTML = currentLikes.toLocaleString() + " likes"
        likeBtn.classList.add("clicked")
    } else {
        likeBtn.classList.remove("clicked")
    }
}

function renderPost(post, targetContainerId) {
    const postsContainer = document.getElementById(targetContainerId)

    const postElement = document.createElement("div")
    postElement.className = "container"

    postElement.innerHTML = `
        <div class="user-info">
            <img class="avatars" src="${post.avatar}">
            <div class="info">
                <h3 class="name">${post.name}</h3>
                <p class="location">${post.location}</p>
            </div>
        </div>
        <img class="upload" src="${post.post}">
        <div class="post-details">
            <div class="icons-container">
                <img class="icon heart" src="./images/icon-heart.png">
                <img class="icon comment" src="./images/icon-comment.png">
                <img class="icon dm" src="./images/icon-dm.png">
            </div>
            <p class="likes">${post.likes} likes</p>
            <p><strong>${post.username}</strong> ${post.comment}</p>
        </div>
    `

    const likeBtn = postElement.querySelector(".icon.heart")
    const likeNum = postElement.querySelector(".likes")
    likeBtn.addEventListener("click", () => addLikes(likeBtn, likeNum))

    postsContainer.appendChild(postElement)
}

renderPost(posts[0], "posts-container")

renderPost(posts[1], "posts-container-one")
renderPost(posts[2], "posts-container-two")